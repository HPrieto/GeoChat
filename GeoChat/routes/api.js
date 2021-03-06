var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController');

// Include index controller module
var controllers = require('../controllers/index.js');

router.get('/:resource', (req, res, next) => {
	var resource = req.params.resource;
	// Get corresponding controller called by http method
	var controller = controllers[resource]
	// Check for non-existing controller
	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource Request: ' + resource
		})
		return
	}
	controller.find(req.query, (err, results) => {
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
});

router.get('/:resource/:id', (req, res, next) => {
	var resource = req.params.resource
	var id = req.params.id
	// Get corresponding controller called by http method
	var controller = controllers[resource]
	// Check for non-existing controller
	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource Request: ' + resource
		})
		return
	}
	conroller.findById(id, (err, result) => {
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
})

// Create route for POST
router.post('/:resource', (req, res, next) => {
	var resource = req.params.resource
	// Get corresponding controller called by http method
	var controller = controllers[resource]
	// Check for non-existing controller
	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource Request: ' + resource
		})
		return
	}
	// Create form data presented in body
	controller.create(req.body, (err, result) => {
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
})

module.exports = router