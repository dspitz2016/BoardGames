var CommentService = require('../services/comment.service');

exports.saveComment = async function(req, res, next) {
    var comment = {
        game_id: req.body.game_id,
        name: req.body.name,
        comment: req.body.comment
    }
    try {
        result = await CommentService.createComment(comment);
        res.redirect('/game/' + comment.game_id);
    } catch(e) {
        console.log(e);
        return e;
    }
}