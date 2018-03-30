var express = require('express');
var router = express.Router();

var GameController = require('../controllers/game.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/games', GameController.getGames);
router.get('/image/:game_id', ImageController.getImage);
module.exports = router;
