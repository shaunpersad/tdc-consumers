"use strict";

module.exports = function createSocialAffinity(client, affinity, done) {

    affinity.name_searchable = affinity.name;
    affinity.category_searchable = affinity.category;
    
    client.index({
        index: 'affinities',
        type: 'affinities_searchable',
        id: affinity.name,
        body: affinity
    }, done);
};

