"use strict";

module.exports = function updateConsumer(client, consumer, done) {
    
    client.update({
        index: 'consumers',
        type: 'consumers_searchable',
        id: consumer.consumer_id,
        body: {
            doc: consumer
        }
    }, done);
};

