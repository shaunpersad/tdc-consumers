"use strict";
const async = require('async');
const elasticsearch = require('elasticsearch');

const createConsumerIndex = require('./src/createConsumerIndex');
const createAffinitiesIndex = require('./src/createAffinitiesIndex');

const importAttributes = require('./src/importAttributes');
const importSocialAffinities = require('./src/importSocialAffinities');
const importBrands = require('./src/importBrands');

const client = new elasticsearch.Client({
    host: 'elasticsearch:9200',
    log: 'info'
});

async.waterfall([

    (next) => {
        client.ping({}, (err) => {

            next(err);
        });
    },
    (next) => {

        createConsumerIndex(client, next);
    },
    (created, next) => {

        console.log('Created consumers index?', created);

        createAffinitiesIndex(client, next);
    },
    (created, next) => {

        console.log('Created affinities index?', created);

        importAttributes(client, next);
    },
    (count, next) => {

        console.log('Added', count, 'consumers.');

        importSocialAffinities(client, next);
    },
    (count, next) => {

        console.log('Added', count, 'social affinities.');
        importBrands(client, next);
    }
], (err, count) => {

    console.log('Added', count, 'brands.');

    console.log('done');
});

