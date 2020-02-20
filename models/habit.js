const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO this is only a partial datamodel needs to be flushed out
// GOTCHA dont forget to update the seed script when this is updated
const habitSchema = new Schema({
  date: { type: Date, default: Date.now },
  userId: { type: String, required: true },
  habitName: { type: String, required: true },
  dayTotal: { type: Number, required: true },
});

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;