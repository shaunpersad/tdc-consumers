"use strict";

const index = 'consumers';

module.exports = function createConsumerIndex(client, done) {

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
                    consumers_searchable: {
                        properties: {
                            consumer_id: {
                                type: 'long'
                            },
                            ADVANTAGEHOMEOWNER: {
                                type: 'integer'
                            },
                            GENDERCODEPERSON1: {
                                type: 'integer'
                            },
                            ADVINDAGEPERSON1: {
                                type: 'integer'
                            },
                            ADVANTAGEHOUSEHOLDAGEENHANCED: {
                                type: 'integer'
                            },
                            ADVANTAGETARGETINCOME20: {
                                type: 'string',
                                index: 'not_analyzed'
                            },
                            NICHES40: {
                                type: 'string',
                                index: 'not_analyzed'
                            },
                            MTVEHICLEPURCHASER: {
                                type: 'integer'
                            },
                            MTTECHNOLOGYEARLYADOPTERS: {
                                type: 'integer'
                            },
                            MTFRESHFOODSEEKERS: {
                                type: 'integer'
                            },
                            MTWHATSONSALESHOPPERS: {
                                type: 'integer'
                            },
                            MTWEEKLYONLINEBANKERS: {
                                type: 'integer'
                            },
                            MTONLINEINSURANCEBUYER: {
                                type: 'integer'
                            },
                            MTFREQUENTMOBILEPURCHASERS: {
                                type: 'integer'
                            },
                            MTGAMERS: {
                                type: 'integer'
                            },
                            MTBUSINESSTRAVELER: {
                                type: 'integer'
                            },
                            MTLIKELYTOUSEANINVESTMENTBROKE: {
                                type: 'integer'
                            },
                            OCCUPATION: {
                                type: 'string',
                                index: 'not_analyzed'
                            },
                            MTPETOWNERS: {
                                type: 'integer'
                            },
                            MTAUTOLOANPURCHASERS: {
                                type: 'integer'
                            },
                            HOBBIESWINES: {
                                type: 'string',
                                index: 'not_analyzed'
                            },
                            BEVERAGESRECENCYOFPURCHASE: {
                                type: 'integer'
                            },
                            FASHIONACCESSORIESANDBEAUTYQUI: {
                                type: 'integer'
                            },
                            FASHIONACCESSORIESBEAUTYRECPUR: {
                                type: 'integer'
                            },
                            SPORTSSPORTSPARTICIPATION: {
                                type: 'string',
                                index: 'not_analyzed'
                            },
                            SPORTSANDOUTDOORRECENCYPURC: {
                                type: 'integer'
                            },
                            MTPERSONALTRAVELER: {
                                type: 'integer'
                            },
                            MTVACATIONSPENDERS: {
                                type: 'integer'
                            },
                            MTINTERNATIONALTRAVELER: {
                                type: 'integer'
                            },
                            B2BBUSINESSMARKETINGQUINTILE: {
                                type: 'integer'
                            },
                            B2BBUSINESSMKTRECENCYPURCHASE: {
                                type: 'integer'
                            },
                            MTFREQUENTONLINEMUSICPURCHASER: {
                                type: 'integer'
                            },
                            MTONDEMANDMOVIESUBSCRIBERS: {
                                type: 'integer'
                            },
                            MTWEARABLETECHNOLOGYUSERS: {
                                type: 'integer'
                            },
                            MTHIGHENDSHOPPERS: {
                                type: 'integer'
                            },
                            MUSICRB: {
                                type: 'string',
                                index: 'not_analyzed'
                            },
                            MTBASKETBALLENTHUSIASTS: {
                                type: 'integer'
                            },
                            brand_cnn: {
                                type: 'boolean'
                            },
                            brand_cnn_money: {
                                type: 'boolean'
                            },
                            brand_ncaa: {
                                type: 'boolean'
                            },
                            brand_tbs: {
                                type: 'boolean'
                            },
                            brand_nba: {
                                type: 'boolean'
                            },
                            brand_as: {
                                type: 'boolean'
                            },
                            brand_tnt: {
                                type: 'boolean'
                            },
                            brand_tcm: {
                                type: 'boolean'
                            },
                            brand_filmstruck: {
                                type: 'boolean'
                            },
                            brand_eleague: {
                                type: 'boolean'
                            },
                            brand_pga: {
                                type: 'boolean'
                            },
                            brand_bleacher_report: {
                                type: 'boolean'
                            },
                            brand_nascar: {
                                type: 'boolean'
                            },
                            affinities: {
                                type: 'string',
                                index: 'not_analyzed'
                            },
                            affinities_ct: {
                                type: 'integer'
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
