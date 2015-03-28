/**
* Board.js
*
* @description :: A collection of taps to display
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var Promise = require('bluebird');

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    taps: {
      collection: 'tap',
      via: 'boards'
    }
  },

  findOneAndPopulate: function(id) {
    return new Promise(function(resolve, reject) {
      Board.findOne(id)
        .populate("taps")
        .then(function(board) {
          var tapKegs = Keg.find({
            id: _.pluck(_.sortBy(board.taps, "sortIndex"), "keg")
          })
            .populate("contents")
            .then(function(results) {
              results = results.map(function(keg) {
                keg.contents.srmHex = Beverage.srmHex(keg.contents.srm);
                return keg;
              });

              return _.indexBy(results, 'id');

            });

          return [board, tapKegs];
        })
        .spread(function(board, tapKegs) {
          board.taps = _.map(board.taps, function(tap) {
            tap.keg = tapKegs[tap.keg];
            return tap;
          });

          resolve(board);
        })
        .catch(function(err) {
          reject(err);
        });
    });
  }
};

