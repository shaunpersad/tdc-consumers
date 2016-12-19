"use strict";

const index = 'affinities';

module.exports = function createAffinitiesIndex(client, done) {

    client.indices.exists({
        index: index
    }, (err, exists) => {

        if (exists) {
            return done(err, false);
        }

        client.indices.create({
            index: index,
            body: {
                mappings: {
                    affinities_searchable: {
                        properties: {
                            name: {
                                type: 'string',
                                index: 'not_analyzed'
                            },
                            category: {
                                type: 'string',
                                index: 'not_analyzed'
                            },
                            name_searchable: {
                                type: 'string'
                            },
                            category_searchable: {
                                type: 'string'
                            }
                        }
                    }
                }
            }
        }, (err) => {
            done(err, true);
        });

    });
};
