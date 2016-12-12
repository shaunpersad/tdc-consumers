"use strict";
const async = require('async');
const _ = require('lodash');
const lineReader = require('line-reader');
const createConsumer = require('./createConsumer');
const createSocialAffinity = require('./createSocialAffinity');
const getConsumer = require('./getConsumer');

module.exports = function importSocialAffinities(client, done) {

    let count = 0;

    lineReader.eachLine('./data/social-affinities.txt', function(line, last, callback) {

        count++;

        let values = line.split('|');

        if (count === 1 || count === 2) {
            return callback();
        }
        
        let consumerId = Number(values[0]);
        let affinity = {
            category: values[1],
            name: values[2]
        };

        async.parallel([

            (done) => {

                getConsumer(client, consumerId, (err, consumer) => {

                    if (err) {
                        return done(err);
                    }

                    consumer = consumer || {
                            consumer_id: consumerId,
                            affinities: [],
                            affinities_ct: 0
                        };

                    var affinities = _.get(consumer, 'affinities', []);
                    affinities.push(affinity.name);
                    consumer.affinities = _.uniq(affinities);
                    consumer.affinities_ct = consumer.affinities.length;

                    createConsumer(client, consumer, (err) => {
                        done(err);
                    });
                });

            },
            (done) => {

                createSocialAffinity(client, affinity, (err) => {
                    done(err);
                });
            }
        ], (err) => {

            if (err || last) {

                callback(false);
                return done(err, count);
            }
            callback();
        });
    });
};
