var express = require('express');
var router = express.Router();

const {Team} = require('../models')

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Express' });
});

router.get('/visitor', function(req, res, next) {
  res.render('visitor', { title: 'Express' });
});

router.get('/players', function(req, res, next) {
  res.render('players', { title: 'Express' });
});

router.get('/teams', async function(req, res, next) {
  let teams = await Team.findAll();
  console.log(teams)
  res.render('teams', { title: 'Express', teams});

});



module.exports = router;
