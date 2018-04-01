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

exports.searchGames = async function(query, limit, page) {
    try {
        var options = {
            page,
            limit
        };
        var searchQuery = {
            "$or": [
                {
                    names: {
                        "$regex": query,
                        "$options": "i"
                    }
                },
                {
                    category: {
                        "$regex": query,
                        "$options": "i"
                    }
                }
            ]
        };
        var games = await Game.paginate(searchQuery, options);
        console.log(games);
        return games;
    } catch (e) {
        console.log(e);
        throw Error('Error searching games');
    }
}