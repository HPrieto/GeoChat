// import model resources
var Comment = require('../models/Comment')

// Specify CRUD operators
module.exports = {
	// GET
	find: (params, callback) => {
		// Call actual mongoose request functions
		Comment.find(params, (err, comments) => {
			// Error has to be first by convention
			if (err) {
				callback(err, null)
				return
			}
			// desired data
			callback(null, comments)
		})
	},
	// GET single value
	findById: (id, callback) => {
		Comment.findById(id, (err, comment) => {
			// Error has to be first by convention
			if (err) {
				callback(err, null)
				return
			}
			// desired data, were just looking for a single comment
			callback(null, comment)
		})
	},
	// POST
	create: (params, callback) => {
		Comment.create(params, (err, comment) => {
			if (err) {
				callback(err, null)
				return
			}

			callback(null, comment)
		})
	},
	// PUT
	update: (id, params, callback) => {
		Comment.findByIdAndUpdate(id, params, { new:true }, (err, comment) => {
			if (err) {
				callback(err, null)
				return
			}
			callback(null, comment)
		})
	},
	// DELETE
	destroy: (id, callback) => {
		Comment.findByIdAndRemove(id, (err) => {
			if (err) {
				callback(err, null)
				return
			}
			callback(null, null)
		})
	}
}























