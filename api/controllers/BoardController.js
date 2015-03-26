/**
 * BoardController
 *
 * @description :: Server-side logic for managing boards
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  findOne: function(req, res) {
    Board.findOneAndPopulate(req.options.id)
      .then(function(board) {
        res.view('board/show', {
          board: board
        });
      })
      .catch(function(err) {
        res.serverError(err);
      });
  }
};

