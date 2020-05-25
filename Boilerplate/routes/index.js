var express = require('express');
var router = express.Router();

// Require controller modules.
var controller = require('../controllers/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */



// Example of a route + a controller 
router.get('/adrian', function(req, res, next) {
    res.render('index', { title: 'Adrian' });
  });



/* GET home page. */
router.get('/controller', controller.index_get);

