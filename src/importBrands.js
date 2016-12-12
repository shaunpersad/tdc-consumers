"use strict";
const async = require('async');
const _ = require('lodash');
const lineReader = require('line-reader');
const updateConsumer = require('./updateConsumer');
const getConsumer = require('./getConsumer');

module.exports = function importBrands(client, done) {

    let count = 0;
    let keys = [];

    lineReader.eachLine('./data/brands.txt', function(line, last, callback) {

        count++;

        let values = line.split('|');

        if (!keys.length) {
            keys = values;
            return callback();
        }

        let consumer = {};

        _.forEach(keys, (key, index) => {
            
            consumer[key.toLowerCase()] = !!parseInt(values[index]);
        });

        updateConsumer(client, consumer, (err) => {

            if (err || last) {

                callback(false);
                return done(err, count);
            }
            callback();
        });
    });
};

