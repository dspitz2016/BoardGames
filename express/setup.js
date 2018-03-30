var mongoose = require('mongoose');
var request = require('request');
var sharp = require('sharp');

var gameService = require('./services/game.service');
var imageService = require('./services/image.service');

var mongoDB = 'mongodb://127.0.0.1:27017/GameData';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
var gridfs;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', function () {
    gridfs = require('mongoose-gridfs')({
        model: 'Image',
        mongooseConnection: db
    });
});

var populateImages = async function () {
    console.log("Starting  Image Population");
    var imagesPopulated = 0;
    var games = await gameService.getGames();
    games.forEach((game) => {
        if (game.game_id != undefined) {
            try {
                const resizeToJpg = sharp().resize(null, 800).toFormat('jpeg');
                request.get(game.image_url)
                .on('error', function(e) {
                    console.log("Request Error");
                })
                .pipe(resizeToJpg)
                .on('error', function(e) {
                    console.log("Invalid Image Type?");
                })
                .toBuffer()
                .then(data => {
                    var imageStream = sharp(data);
                    imageService.saveImage(gridfs.model, imageStream, game.game_id);
                });
            } catch (e) {
                console.log(e);
            }
        }
    });
}

populateImages();