const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exampleSchema = new Schema({
  field1: String,
  field2: Number
});

const Example = mongoose.model('Example', exampleSchema, 'example');

module.exports = Example;