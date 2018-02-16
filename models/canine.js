var mongoose = require('mongoose');
var User = require('./user.js');

var canineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 99
  },
  filters: Array,
  memberStatus: String,
  breed: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  }
});

var Canine = mongoose.model('Canine', canineSchema);

module.exports = Canine;
