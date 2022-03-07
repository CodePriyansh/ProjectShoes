const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shoesDb')

module.exports = mongoose.connection;
