var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'GeoChat' });
});

/* GET home page. */
router.get('/createzone', (req, res, next) => {
  res.render('createzone', null);
});

/* GET createcomment route */
router.get('/createcomment', (req, res, next) => {
	res.render('createcomment', null);
});

module.exports = router;