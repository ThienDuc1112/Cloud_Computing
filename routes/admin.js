var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
   res.render('admin', {Title:'Admin', Name: 'Thien'})
});

module.exports = router;