var express = require('express');
var router = express.Router();
//var cons = require('consolidate');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('slider', {
    title: 'Express'
  });
});
/* GET Hello World page. */
router.get('/slider', function (req, res) {
  res.render('slider', {
    title: 'Hello, World!'
  })
});
module.exports = router;