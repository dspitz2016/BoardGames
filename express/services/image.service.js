exports.getImageById = async function (filename) {
    try {
        var game = ImageModel.findOne({
            filename: this.filename
        });
        return game;
    } catch (e) {
        console.log(e);
        throw Error('Error finding game by game_id');
    }
}

exports.saveImage = async function (gridfsModel, imageStream, game_id) {
    try {
        imageModel = gridfsModel;
        imageModel.write({
            filename: this.game_id + '.jpg',
            contentType: 'image/jpeg',
        }, imageStream, function (error, createdFile) {
        });
        console.log('Saved image: ' + game_id + '.jpg');
    } catch (e) {
        console.log(e);
        throw Error('Error saving image');
    }
}