// const logger = require('./startup/login');
const winston=require('winston');
const mongoose = require('mongoose');
const config=require('config');

module.exports = function() {
  // mongoose.connect('mongodb://localhost/pubBooks')
  const db=config.get('db');
  // const db =config.get('mongodb+srv://miniadmin:lastdays008@cluster0.d3j94.mongodb.net/pubBooks');
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));
}