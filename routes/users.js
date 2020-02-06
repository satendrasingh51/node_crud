var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(newFunction());
});

module.exports = router;
function newFunction() {
  return 'respond with a resource';
}

