require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();
const port = process.env.port || 3001;

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

//wraps our app with our routes folder
routes(app);
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
