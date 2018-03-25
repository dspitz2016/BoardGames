var mongoose = require('mongoose');
var mongoosePag = require('mongoose-paginate');

var GameSchema = new mongoose.Schema({
    rank = Number,
    bgg_url = String,
    game_id = Number,
    names = String,
    min_players = Number,
    max_players = Number,
    avg_time = Number,
    min_time = Number,
    max_time = Number,
    year = Number,
    avg_rating = Number,
    geek_rating = Number,
    num_votes = Number,
    image_url = String,
    age = Number,
    mechanic = String,
    owned = Number,
    category = String,
    designer = String,
    weight = Number
});

GameSchema.plugin(mongoosePaginate);
const Game = mongoose.model('Game', GameSchema);

module.exports = Game;;
