var mongoose = require('mongoose');
var gridfs = require('mongoose-gridfs');

var ImageSchema = gridfs.schema;

module.export = mongoose.model('Image', ImageSchema);