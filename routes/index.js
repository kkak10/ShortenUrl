var express = require('express');
var resource = require("../resources/common");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var title = resource.common_title;

  res.render('index', { title: title });
});

module.exports = router;
