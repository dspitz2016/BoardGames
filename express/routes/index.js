var express = require('express');
var router = express.Router();

var GameController = require('../controllers/game.controller');
var ImageController = require('../controllers/Image.controller');

/* GET home page. */
router.get('/', GameController.getGamesHomePage);
router.get('/games/', GameController.getGames);
router.get('/games/:page', GameController.getGames);
router.get('/game/:id', GameController.getGameById);
//router.get('/image/:filename', ImageController.getImage);
module.exports = router;
