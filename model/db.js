const { MongoClient } = require("mongodb");
require("dotenv").config();
const uriDb = process.env.URI_DB;

const db = MongoClient.connect(uriDb, {
  useUnifiedTopology: true,
  maxPoolSize: 5,
});

process.on("SIGINT", async () => {
  // Action 'SIGINT' is required in case we close our connection, for example by clicking CTRL + C.
  // We do not want to have our connections accumulated
  const client = await db;
  client.close();
  console.log("Connection fro db closed and app temination");
  process.exit(1);
});

module.exports = db;
