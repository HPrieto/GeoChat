// import model resources
var Zone = require('../models/Zone')

// Specify CRUD operators
module.exports = {
	// GET
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
	// GET single value
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
	// POST
	create: (params, callback) => {
		// Properly format zipcodes array
		var zips = params['zipCodes'];
		// Split the zipcode values into a new string
		var zip = zips.split(',');
		var newZips = []
		// Add trimmed zipcode values into a new array
		zip.forEach((zipCode) => {
			newZips.push(zipCode.trim());
		})
		// Set new formatted array to params
		params['zipCodes'] = newZips;
		Zone.create(params, (err, zone) => {
			if (err) {
				callback(err, null)
				return
			}
			callback(null, zone)
		})
	},
	// PUT
	update: (id, params, callback) => {
		Zone.findByIdAndUpdate(id, params, { new:true }, (err, zone) => {
			if (err) {
				callback(err, null)
				return
			}
			callback(null, zone)
		})
	},
	// DELETE
	destroy: (id, callback) => {
		Zone.findByIdAndRemove(id, (err) => {
			if (err) {
				callback(err, null)
				return
			}
			callback(null, null)
		})
	}
}























