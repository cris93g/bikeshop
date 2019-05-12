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
  },
  getMensBikes(req, res) {
    const db = req.app.get("db");
    db.getMens()
      .then(response => res.status(200).json(response))
      .catch(console.log);
  },
  getWomensBikes(req, res) {
    const db = req.app.get("db");
    db.getWomens()
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  getKidsBikes(req, res) {
    const db = req.app.get("db");
    db.getKid()
      .then(results => res.status(200).json(results))
      .catch(console.log);
  }
};
