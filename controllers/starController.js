const db = require("../Users");

// Defining methods for the habitsController
module.exports =  {
  findOne: function(req, res) {
    db.Reward
      .findOne(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("updating in star controller",req)
    db.User
      .findOneAndUpdate({ _id: req.params.id }, {stars: req.params.stars})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};