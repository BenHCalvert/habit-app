import axios from "axios";

export default {
  // Gets all habits
  getHabits: function() {
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
  },

  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
    
  },

  signup: function(signupInfo) {
    console.log("this is a route", signupInfo);
    return axios.post("/api/users/signup", signupInfo);
    
  },

  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  logout: function() {
    return axios.get("/api/users/logout")
  }

};
