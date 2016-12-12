"use strict";

module.exports = function createConsumer(client, consumer, done) {
    
    client.index({
        index: 'consumers',
        type: 'consumers_searchable',
        id: consumer.consumer_id,
        body: consumer
    }, done);
};
