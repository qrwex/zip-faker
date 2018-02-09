'use strict';

const _ = require('lodash');
const random = require('./Random');

const formats = require('./formats.json'); // Transformed from: https://en.wikipedia.org/wiki/List_of_postal_codes

class ZipFaker {

    /**
     * @param country
     * @returns {string|number}
     */
    generate(country) {

        let format = [], code = null, countryCode = country.toUpperCase();

        if (_.isEmpty(formats[countryCode])) {
            return code;
        }

        _.forEach(_.sample(formats[countryCode]), (symbol) => {
            format.push(
                symbol
                    .replace('A', random.letter())
                    .replace('N', random.number())
                    .replace('?', random.any())
            )
        });

        return format.join('').replace('CC', countryCode);
    }
}

module.exports = new ZipFaker;