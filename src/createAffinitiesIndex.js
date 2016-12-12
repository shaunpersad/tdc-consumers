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
                                type: 'keyword'
                            },
                            category: {
                                type: 'keyword'
                            },
                            name_searchable: {
                                type: 'text'
                            },
                            category_searchable: {
                                type: 'text'
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
