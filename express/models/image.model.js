var mongoose = require('mongoose');
var gridfs = require('mongoose-gridfs');

var ImageSchema = gridfs.schema;

const Image = mongoose.model('Image', ImageSchema, 'fs.files');
module.exports = Image;