// import model resources
var Zone = require('../models/Zone')

// Specify CRUD operators
module.exports = {
	find: (params, callback) => {
		// Call actual mongoose request functions
		Zone.find(params, (err, zones) => {
			// Error has to be first by convention
			if (err) {
				callback(err, null)
				return
			}
			// desired data
			callback(null, zones)
		})
	},

	findById: (id, callback) => {
		Zone.findById(id, (err, zone) => {
			// Error has to be first by convention
			if (err) {
				callback(err, null)
				return
			}
			// desired data, were just looking for a single zone
			callback(null, zone)
		})
	},

	create: (params, callback) => {
		Zone.create(params, (err, zone) => {
			if (err) {
				callback(err, null)
				return
			}
			
			callback(null, zone)
		})
	},

	update: () => {

	},

	destroy: () => {

	}
}