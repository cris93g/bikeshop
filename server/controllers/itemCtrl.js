var stripe = require("stripe")("sk_test_iIp2MFjxeCHyGo8QIh62tmdb00bLbrutvv");
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
  },
  /*stripe*/
  checkout(req, res) {
    const { token, total } = req.body;
    const stripePayload = {
      amount: Math.round(Number(total) * 100),
      currency: "usd",
      description: "Deliveroo Charge",
      source: token,
      statement_descriptor: "Somehting somehting"
    };
    const charge = stripe.charges.create(stripePayload);
    charge
      .then(data => {
        res.sendStatus(200);
      })
      .catch(e => {
        res.status(e.statusCode).send(e.message);
      });
  }
};
