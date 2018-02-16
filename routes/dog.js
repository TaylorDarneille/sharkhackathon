var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var Canine = require('../models/canine');

router.get('/', function (req, res) {
  res.send('hello i am dog');
  console.log('dog get');
});


router.post('/', function(req, res, next){
	Canine.create({
		name: req.body.name,
		breed: req.body.breed,
		filters: req.body.filters,
		age: req.body.age,
		gender: req.body.gender
	})
	console.log('dog post route');
});

module.exports = router;