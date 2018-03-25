// mongoose schema for comments collection

var mongoose = require('mongoose');
// var mongoosePag = require('mongoose-paginate');

/* "game_id" is a unique value in each game in the database. Do we
* want to use the "game_id" value as the identifier for comments
* or use the String ObjectId value?
*/
var CommentSchema = new mongoose.Schema({
  id: int,
  name: String,
  comment: String
});

// CommentSchema.plugin(mongoosePag);
// const Comment = mongoose.model('Comment', CommentSchema);

var Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment;
