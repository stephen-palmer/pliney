/**
 * BoardController
 *
 * @description :: Server-side logic for managing boards
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var _ = require('lodash');

module.exports = {
  findOne: function(req, res) {
    Board.findOne(req.options.id)
      .populate("taps")
      .then(function(board) {
        var tapKegs = Keg.find({
              id: _.pluck(_.sortBy(board.taps, "sortIndex"), "keg")
          })
          .populate("contents")
          .then(function(results) {
            return _.indexBy(results, 'id');
          });

        return [board, tapKegs];
      })
      .spread(function(board, tapKegs) {
        board.taps = _.map(board.taps, function(tap) {
          tap.keg = tapKegs[tap.keg];
          return tap;
        });

        res.ok(board);
      })
      .catch(function(err) {
        if(err) {
         return res.serverError(err);
        }
      });
  }
};

