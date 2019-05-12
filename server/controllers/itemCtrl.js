module.exports = {
	getBikes(req, res) {
		const db = req.app.get("db");
		db.getBikes()
			.then(response => res.status(200).json(response))
			.catch(console.log);
	},
	getMyProduct(req, res) {
		const { id } = req.body;
		const db = req.app.get("db");
		db.getProduct([id])
			.then(response => res.status(200).json(response))
			.catch(console.log);
	}
};
