var ImageService = require('../services/image.service');

exports.getImage = async function (req, res, next) {
    var filename = req.params.filename;
    try {
        var imageData = await ImageService.getImageByFileName(filename);
        res.writeHead(200, {
            'Content-Type': 'image/jpeg',
            'Content-Length': imageData.length
        });
        res.end(imageData);
    } catch (e) {
        return e;
    }
}