var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('../views/index.ejs', { title: 'Cloud computing class' })});

  router.get('/login', function (req, res) {
    res.render('login');
});

// });
// router.get('/getdata', function (req, res) {
//   const days = ["Input from 1 to 7", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   var day = req.query.number;
//   day = parseInt(day);
//   var day_in_week = days[day];

//   //res.send("Today is: " + day_in_week);
//   res.render('../views/index.ejs', {Result: day_in_week});
// });

module.exports = router;
