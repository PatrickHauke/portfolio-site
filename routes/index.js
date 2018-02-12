var express = require('express');
var router = express.Router();

let aboutPage = {
  "pageContent": [
    {"dir": "partials/bio"}
  ]
};



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', aboutPage);
});

module.exports = router;
