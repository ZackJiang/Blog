'use strict';

var mongoose = require('mongoose');


var blog = new mongoose.Schema({
	country: String,
	description: String
});

var model = mongoose.model('blog', blog);

module.exports = model;