var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DNA photgraphy' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'DNA photgraphy' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'DNA photgraphy' });
});
module.exports = router;
