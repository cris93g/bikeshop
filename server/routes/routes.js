//brings functions from controller file
const { getBikes, getMyProduct } = require("../controllers/itemCtrl");

//state each route
module.exports = app => {
	// app.get("/api/yourdogs", getDogs);
	app.get("/api/bikes", getBikes);
	app.post("/api/product", getMyProduct);
};
