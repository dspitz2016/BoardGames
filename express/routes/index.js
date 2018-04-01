var express = require('express');
var router = express.Router();

var GameController = require('../controllers/game.controller');
var ImageController = require('../controllers/image.controller');
var CommentController = require('../controllers/comment.controller');

/* GET home page. */
router.get('/', GameController.getGamesHomePage);
router.get('/games/', GameController.getGames);
router.get('/games/:page', GameController.getGames);
router.get('/game/:id', GameController.getGameById);
router.get('/resources', function(req, res) {
    res.render('resources');
});
router.get('/search', GameController.searchGames);
router.get('/search/:query/:page', GameController.searchGames);
router.post('/comment/create', CommentController.saveComment)
//router.get('/image/:filename', ImageController.getImage); don't need individual pages
module.exports = router;
