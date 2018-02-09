'use strict';

const _ = require('lodash');

class Random {

    /**
     * @returns {string}
     */
    letter() {
        return _.sample('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    };

    /**
     * @returns {number}
     */
    number() {
        return _.random(0, 9);
    };

    /**
     * @returns {number|string}
     */
    any() {
        return (_.sample([this.letter, this.number]))()
    }
}

module.exports = new Random;