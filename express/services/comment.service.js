var Comment = require('../models/comment.model');
_this = this;

exports.createComment = async function(c) {
  
  var newComment = new Comment(
    id:c.id,
    name:c.name,
    comment:c.comment
  )};
  try {
    var nCom = await newComment.save();
    return nCom;
  }
  catch(err) {
    throw Error('Error making new comment');
  }
}
