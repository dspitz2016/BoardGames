var Game = require('../models/game.model');

exports.getGameById = async function(game_id) {
    try {
        var game = await Game.findOne({
            game_id: game_id
        });
        console.log(game);
        return game;
    } catch (e) {
        console.log(e);
        throw Error('Error finding game by game_id');
    }
}

exports.getGames = async function(limit = 5000, page = 1) {
    try {
        var options = {
            page,
            limit
        };
        var query = {};
        var games = await Game.paginate(query, options);
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
            ],
            
        });
        return games;
    } catch (e) {
        console.log(e);
        throw Error('Error searching games');
    }
}