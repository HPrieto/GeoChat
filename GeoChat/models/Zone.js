// npm install -save mongoose
var mongoose = require('mongoose');

// Setyp schema
var ZoneSchema = new mongoose.Schema({
	// Fields/Properties
	// Mongoose Rule: Location has to be an array of numbers
	name: {type: String, default: ''},
	zipCodes: {type: Array, default: []},
	timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('ZoneSchema', ZoneSchema)