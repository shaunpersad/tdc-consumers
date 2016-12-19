"use strict";
const _ = require('lodash');
const lineReader = require('line-reader');
const createConsumer = require('./createConsumer');

module.exports = function importAttributes(client, done) {

    const fields = {
        //main
        'ADVANTAGEHOMEOWNER': Number,
        'GENDERCODEPERSON1': Number,
        'ADVINDAGEPERSON1': Number,
        'ADVANTAGEHOUSEHOLDAGEENHANCED': Number,
        'ADVANTAGETARGETINCOME20': String,
        'NICHES40': String,
        //additional
        'MTVEHICLEPURCHASER': Number,
        'MTTECHNOLOGYEARLYADOPTERS': Number,
        'MTFRESHFOODSEEKERS': Number,
        'MTWHATSONSALESHOPPERS': Number,
        'MTWEEKLYONLINEBANKERS': Number,
        'MTONLINEINSURANCEBUYER': Number,
        'MTFREQUENTMOBILEPURCHASERS': Number,
        'MTGAMERS': Number,
        'MTBUSINESSTRAVELER': Number,
        'MTLIKELYTOUSEANINVESTMENTBROKE': Number,
        //new
        'OCCUPATION': String,
        'MTPETOWNERS': Number,
        'MTAUTOLOANPURCHASERS': Number,
        'HOBBIESWINES': String,
        'BEVERAGESRECENCYOFPURCHASE': Number,
        'FASHIONACCESSORIESANDBEAUTYQUI': Number,
        'FASHIONACCESSORIESBEAUTYRECPUR': Number,
        'SPORTSSPORTSPARTICIPATION': String,
        'SPORTSANDOUTDOORRECENCYPURC': Number,
        'MTPERSONALTRAVELER': Number,
        'MTVACATIONSPENDERS': Number,
        'MTINTERNATIONALTRAVELER': Number,
        'B2BBUSINESSMARKETINGQUINTILE': Number,
        'B2BBUSINESSMKTRECENCYPURCHASE': Number,
        'MTFREQUENTONLINEMUSICPURCHASER': Number,
        'MTONDEMANDMOVIESUBSCRIBERS': Number,
        'MTWEARABLETECHNOLOGYUSERS': Number,
        'MTHIGHENDSHOPPERS': Number,
        'MUSICRB': String,
        'MTBASKETBALLENTHUSIASTS': Number
    };

    let count = 0;
    let keys = [];

    lineReader.eachLine('./data/attributes.txt', function(line, last, callback) {

        count++;
        
        let values = line.split('|');

        if (!keys.length) {
            keys = values;
            return callback();
        }

        let consumer = {};

        _.forEach(keys, (key, index) => {

            if (!index) {
                consumer.consumer_id = parseInt(values[index]);
                return;
            }
            let parser = fields[key];

            if (parser && values[index] !== '') {
                consumer[key] = parser(values[index]);
            }
        });

        createConsumer(client, consumer, (err) => {

            if (err || last) {

                callback(false);
                return done(err, count);
            }
            callback();
        });
    });
};