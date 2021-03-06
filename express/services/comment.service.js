var Comment = require('../models/comment.model');
_this = this;
// to create new comments based on inputed data
exports.createComment = async function(c) {
  // new object to insert in database
  var newComment = new Comment({
    game_id: c.game_id,
    name: c.name,
    comment: c.comment
  });
// try to insert into database, error if can't
  try {
    var nCom = await newComment.save();
    return nCom;
  }
  catch(err) {
    throw Error('Error making new comment');
  }
}

// to get comments from database based on game ID number
exports.getComments = async function(game_id) {
   try {
      var com = await Comment.find({game_id: game_id}); 
      return com;
   }
  catch(err) {
    throw Error('Error finding comments with this ID'); 
  }
}
