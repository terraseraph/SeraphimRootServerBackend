var express = require('express');
var router = express.Router();
const app = require('../app')
var log = require('../controllers/loggingController').log;
/* GET home page. */

router.get('/', function(req, res, next) {
  var result = {
    name: "Seraphim Root Server"
  }
  log(result)
  res.send(result)
});

module.exports = router;
