//brings functions from controller file
const { getBikes } = require("../controllers/itemCtrl");

//state each route
module.exports = app => {
  // app.get("/api/yourdogs", getDogs);
  app.get("/api/bikes", getBikes);
};
