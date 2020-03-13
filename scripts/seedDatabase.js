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
    dayTotal: 14,
    weight: 1,
    week: {
      sunday: true,
      monday: false,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: false,
      saturday: true
    }
  },
  {
    date: new Date(Date.now()),
    userId: "userId1",
    habitName: "Picking ones friends nose",
    dayTotal: 14,
    weight: 2,
    week: {
      sunday: true,
      monday: true,
      tuesday: false,
      wednesday: true,
      thursday: false,
      friday: true,
      saturday: true
    }
  }
];

const rewardSeed = [
  {
    date: new Date(Date.now()),
    userId: "userId1",
    rewardName: "Icecream sandwich",
    cost: 10
  },
  {
    date: new Date(Date.now()),
    userId: "userId1",
    rewardName: "3 Beers at one time",
    cost: 30
  },
  {
    date: new Date(Date.now()),
    userId: "userId1",
    rewardName: "New road bike",
    cost: 300
  }
];

db.Habit
  .remove({})
  .then(() => db.Habit.collection.insertMany(habitSeed))
  .then(data => {
    console.log(data.result.n + " habit records inserted into habitlist");
    // commented out since we want the connection to stay open to run the reward insert
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Reward
  .remove({})
  .then(() => db.Reward.collection.insertMany(rewardSeed))
  .then(data => {
    console.log(data.result.n + " reward records inserted into habitlist");
    // mongoose process no longer needed
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });