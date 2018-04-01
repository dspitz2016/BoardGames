var GameService = require('../services/game.service');
var CommentService = require('../services/comment.service');

exports.getGameById = async function(req, res, next) {
    var game_id = req.params.id;

    try {
        var game = await GameService.getGameById(game_id);
        var comments = await CommentService.getComments(game_id);
        console.log(game);
        res.render('game', {title: game.names, game: game, comments: comments});
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
        res.render('games', {title: 'Game List', game_list: games.docs, page: games.page, pages: games.pages});
    } catch (e) {
        return e;
    }
}

exports.searchGames = async function(req, res, next) {
    var search_query="";
    var page = 1;
    if(req.params.query) {
        search_query = req.params.query;
    } else if(req.query.search) {
        search_query = req.query.search;
    }
    if (req.params.page) {
        page = req.params.page;
    }

    console.log(search_query);
    console.log(page);

    try {
        var games = await GameService.searchGames(search_query, 10, page);
        res.render('search', {title: 'Game List', game_list: games.docs, page: games.page, pages: games.pages , search: search_query});
    } catch (e) {
        return e;
    }
}
