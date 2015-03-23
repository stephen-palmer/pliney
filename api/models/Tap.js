/**
* Tap.js
*
* @description :: Associates a keg currently being served to a board
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    sortIndex: {
      type: 'integer',
      required: true
    },
    keg: {
      model: 'keg',
      required: true
    },
    boards: {
      collection: 'board',
      via: 'taps'
    }
  }
};

