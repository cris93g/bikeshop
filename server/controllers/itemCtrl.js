module.exports = {
	getBikes(req, res) {
		const db = req.app.get("db");
		db.getBikes()
			.then(response => res.status(200).json(response))
			.catch(console.log);
	}
};
