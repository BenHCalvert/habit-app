const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// USE this to insert week as a sub-document of habitSchema
// const week = new Schema({
//   sunday: { type: Boolean, required: true, default: false },
//   monday: { type: Boolean, required: true, default: false },
//   tuesday: { type: Boolean, required: true, default: false },
//   wednesday: { type: Boolean, required: true, default: false },
//   thursday: { type: Boolean, required: true, default: false },
//   friday: { type: Boolean, required: true, default: false },
//   saturday: { type: Boolean, required: true, default: false }
// });

// TODO this is only a partial datamodel needs to be flushed out
// GOTCHA dont forget to update the seed script when this is updated
const habitSchema = new Schema({
  date: { type: Date, default: Date.now },
  userId: { type: String, required: true },
  habitName: { type: String, required: true },
  dayTotal: { type: Number, required: true },
  weight: { type: Number, required: true },
  week: {
    sunday: { type: Boolean, required: true, default: false },
    monday: { type: Boolean, required: true, default: false },
    tuesday: { type: Boolean, required: true, default: false },
    wednesday: { type: Boolean, required: true, default: false },
    thursday: { type: Boolean, required: true, default: false },
    friday: { type: Boolean, required: true, default: false },
    saturday: { type: Boolean, required: true, default: false }
  }
});


const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;