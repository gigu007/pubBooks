// const logger = require('./startup/login');
const winston=require('winston');
const mongoose = require('mongoose');
const config=require('config');

module.exports = function() {
  // mongoose.connect('mongodb://localhost/pubBooks')
  const db=config.get('db');
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));
}