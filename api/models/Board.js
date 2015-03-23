/**
* Board.js
*
* @description :: A collection of taps to display
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    taps: {
      collection: 'tap',
      via: 'boards'
    }
  }
};

