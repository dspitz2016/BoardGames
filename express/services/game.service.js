var Game = require('../models/game.model');

exports.getGameById = async function(game_id) {
    try {
        var game = Game.findOne({
            game_id: this.game_id
        });
        return game;
    } catch (e) {
        console.log(e);
        throw Error('Error finding game by game_id');
    }
}

exports.getGames = async function() {
    try {
        var games = await Game.find({});
        return games;
    } catch (e) {
        console.log(e);
        throw Error('Error getting games');
    }
}

exports.searchGames = async function(query) {
    try {
        var games = await Game.find({
            $or: [
                {
                    name: {
                        $regex: ".*" + query + ".*"
                    }
                },
                {
                    category: {
                        $regex: ",*" + query + ".*"
                    }
                }
            ]
        });
        return games;
    } catch (e) {
        console.log(e);
        throw Error('Error searching games');
    }
}