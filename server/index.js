require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");

const app = express();
const port = process.env.port || 3001;

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
