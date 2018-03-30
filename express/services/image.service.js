exports.getImageByGameId = async function (game_id) {
    try {
        var image = new ImageModel({
            filename: game_id + '.jpg'
        });
        image.read(function(error, content){
            var img = new Buffer(content).toString(base64);
            return img;
        });
    } catch (e) {
        console.log(e);
        throw Error('Error finding game by game_id');
    }
}

exports.saveImage = async function (gridfsModel, imageStream, game_id) {
    try {
        imageModel = gridfsModel;
        imageModel.write({
            filename: game_id + '.jpg',
            contentType: 'image/jpeg',
        }, imageStream, function (error, createdFile) {
            console.log('Error saving image.');
        });
        console.log('Saved image: ' + game_id + '.jpg');
    } catch (e) {
        console.log(e);
        throw Error('Error saving image');
    }
}