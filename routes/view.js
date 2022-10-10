
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('../views/view.ejs');
});

router.get('/login', function (req, res) {
    res.render('../views/login.ejs');
});

module.exports = router;