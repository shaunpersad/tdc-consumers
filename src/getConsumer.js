"use strict";
var _ = require('lodash');

module.exports = function getConsumer(client, consumerId, done) {

    client.get({
        index: 'consumers',
        type: 'consumers_searchable',
        id: consumerId
    }, (err, result) => {

        var consumer = _.get(result, '_source');
        done(null, consumer);
    });
};
