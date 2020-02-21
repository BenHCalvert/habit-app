const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Habit collection and inserts the habits

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/habitlist"
);

const habitSeed = [
  {
    date: new Date(Date.now()),
    userId: "userId1",
    habitName: "Picking ones nose",
    dayTotal: 14
  },
  {
    date: new Date(Date.now()),
    userId: "userId1",
    habitName: "Picking ones friends nose",
    dayTotal: 14
  }
];

db.Habit
  .remove({})
  .then(() => db.Habit.collection.insertMany(habitSeed))
  .then(data => {
    console.log(data.result.n + " records inserted into habitlist");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });