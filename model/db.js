const mongoose = require('mongoose');
require('dotenv').config();
const uriDb = process.env.URI_DB;

const db = mongoose.connect(uriDb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 5,
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection to DB');
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', (err) => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', async () => {
  // We do not want to have our connections accumulated, when connection has been terminated
  // Action 'SIGINT' is required in case we close our connection, for example by clicking CTRL + C.
  await mongoose.connection.close();
  console.log('Connection for db closed and app temination');
  process.exit(1);
});

module.exports = db;
