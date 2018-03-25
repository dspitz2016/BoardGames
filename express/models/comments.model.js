// mongoose schema for comments collection

var mongoose = require('mongoose');

/* "game_id" is a unique value in each game in the database. Do we
* want to use the "game_id" value as the identifier for comments
* or use the String ObjectId value?
*/
var CommentSchema = new mongoose.Schema({
  game_id: int,
  name: String,
  comment: String
});

var Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment;
