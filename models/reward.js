const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO this is only a partial datamodel needs to be flushed out
const rewardSchema = new Schema({
  date: { type: Date, default: Date.now },
  userId: { type: String, required: true },
  rewardName: { type: String, required: true },
  cost: { type: Number, required: true }
});

const Reward = mongoose.model("Reward", rewardSchema);

module.exports = Reward;