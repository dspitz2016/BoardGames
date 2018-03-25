var GameService = require('../services/game.service');

exports.getGameById = async function(req, res, next) {
    var game_id = req.params.id;

    try {
        var game = await GameService.getGameById(game_id);
        return res.status(200).json({
            status: 200,
            data: game,
            message: "Successfully recieved Game"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message = e.message
        });
    }
}

exports.getGames = async function(req, res, next) {
    try {
        var games = await GameService.getGames();
        return res.status(200).json({
            status: 200,
            data: games,
            message: "Successfully received Games"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message = e.message
        });
    }
}

exports.searchGames = async function(req, res, next) {
    var search_query = req.params.query;

    try {
        var games = await GameService.searchGames(query);
        return res.status(200).json({
            status: 200,
            data: games,
            message: "Successfully searched Games"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message = e.message
        });
    }
}
