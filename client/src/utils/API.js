import axios from "axios";

export default {
  // Gets all habits
  getHabit: function() {
    return axios.get("/api/habits");
  },
  // Gets the habits with the given id
  getHabit: function(id) {
    return axios.get("/api/habits/" + id);
  },
  // Deletes the habit with the given id
  deleteHabit: function(id) {
    return axios.delete("/api/habits/" + id);
  },
  // Saves a habit to the database
  saveHabit: function(habitData) {
    return axios.post("/api/habits", habitData);
  },
  // Gets all rewards
  getReward: function() {
    return axios.get("/api/rewards");
  },
  // Gets the rewards with the given id
  getReward: function(id) {
    return axios.get("/api/rewards/" + id);
  },
  // Deletes the rewards with the given id
  deleteReward: function(id) {
    return axios.delete("/api/rewards/" + id);
  },
  // Saves a rewards to the database
  saveReward: function(rewardsData) {
    return axios.post("/api/rewards",rewardsData);
  }
};