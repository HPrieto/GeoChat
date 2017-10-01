var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController');

router.get('/:resource', (req, res, next) => {
	var resource = req.params.resource;

	// Check ZoneController find CRUD operator
	if (resource == 'zone') {
		ZoneController.find(req.query, (err, results) => {
			// Check for zone find operator error
			// Respond with error to user
			if (err) {
				res.json({
					confirmation: 'Not Found',
					message: err
				})
				return
			}
			// Respond with success results
			res.json({
				confirmation: 'success',
				results: results
			})
		})
	}
});

router.get('/:resource/:id', (req, res, next) => {
	var resource = req.params.resource
	var id = req.params.id
	if (resource == 'zone') {
		ZoneController.findById(id, (err, results) => {
			if (err) {
				res.json({
					confirmation: 'fail',
					message: err
				})
				return
			}
			// Response to user/browser
			res.json({
				confirmation: 'success',
				result: result
			})
		})
	}
})

// Create route for POST
router.post('/:resource', (req, res, next) => {
	var resource = req.params.resource
	// Check where the resource is coming from
	if (resource == 'zone') {
		// Create form data presented in body
		ZoneController.create(req.body, (err, result) => {
			// Check if there is an error creating a zone
			if (err) {
				res.json({
					confirmation: 'fail',
					message: err
				})
				return
			}

			res.json({
				confirmation: 'success',
				result: result
			})
		})
	}
})

module.exports = router