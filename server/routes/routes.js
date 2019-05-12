//brings functions from controller file
const {
  getBikes,
  getMyProduct,
  getMensBikes,
  getWomensBikes,
  getKidsBikes
} = require("../controllers/itemCtrl");

//state each route
module.exports = app => {
  app.get("/api/bikes", getBikes);
  app.post("/api/product", getMyProduct);
  app.get("/api/mens", getMensBikes);
  app.get("/api/womens", getWomensBikes);
  app.get("api/kids", getKidsBikes);
};
