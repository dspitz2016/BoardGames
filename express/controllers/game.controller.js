var GameService = require('../services/game.service');

exports.getGameById = async function(req, res, next) {
    var game_id = req.params.id;

    try {
        var game = await GameService.getGameById(game_id);
        console.log(game);
        res.render('game', {title: game.names, game: game});
    } catch (e) {
        return e;
    }
}

exports.getGamesHomePage = async function(req, res, next) {
    try {
        var games = await GameService.getGames(4);
        console.log(games);
        res.render('index', {title: 'Game List', game_list: games.docs});
    } catch (e) {
        return e;
    }
}

exports.getGames = async function(req, res, next) {
    var page = req.params.page;
    console.log(page);
    if(!page) {
        page = 1;
    }
    try {
        var games = await GameService.getGames(10, page);
        console.log(games);
        res.render('games', {title: 'Game List', game_list: games.docs, page: games.page, pages: games.pages});
    } catch (e) {
        return e;
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
        return e;
    }
}
