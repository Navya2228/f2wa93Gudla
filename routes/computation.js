var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = Math.floor(Math.random() * 10);
    var y = Math.floor(Math.random() * 10);
    var a = Math.atan2(x,y);
    var b = Math.atanh(x);
    var c = Math.cbrt(x);
  res.render('computation', { title: 'Bonus Computation', x:x,y:y, a:a, b:b, c:c });
});

module.exports = router;
