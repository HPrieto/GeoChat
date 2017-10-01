// npm install -save mongoose
var mongoose = require('mongoose')

// Setyp schema
var CommentSchema = new mongoose.Schema({
	// Fields/Properties
	body: {type: String, default: ''},
	username: {type: String, default: ''},
	timestamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model('CommentSchema', CommentSchema)