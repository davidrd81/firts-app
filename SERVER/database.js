const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const URI = 'mongodb://localhost/mean-crud-bitacora';

mongoose.connect(URI)
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

module.exports = mongoose;