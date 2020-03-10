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
  // Updates the habits with the given id
  updateHabit: function(habitData) {
    console.log("util/API/ updateHabit",habitData._id, habitData)
    return axios.put("/api/habits/" + habitData._id, habitData);
  },
  // Deletes the habit with the given id
  deleteHabit: function(id) {
    console.log("util/API/ delHabit",id)
    return axios.delete("/api/habits/" + id);
  },
  // Saves a habit to the database
  saveHabit: function(habitData) {
    return axios.post("/api/habits", habitData);
  },
  // Gets all rewards
  getRewards: function() {
    return axios.get("/api/rewards");
  },
  // Gets the rewards with the given id
  getReward: function(id) {
    return axios.get("/api/rewards/" + id);
  },
  // Updates the reward with the given id
  updateReward: function(rewardData) {
    console.log(`util/API/ rewardData ${rewardData._id} data ${rewardData}`)
    return axios.put("/api/rewards/" + rewardData._id, rewardData);
  },
  // Deletes the rewards with the given id
  deleteReward: function(id) {
    return axios.delete("/api/rewards/" + id);
  },
  // Saves a rewards to the database
  saveReward: function(rewardsData) {
    return axios.post("/api/rewards",rewardsData);
  },
  // Gets the rewards with the given id
  getStars: function(id) {
    console.log(`util/API/getstars/${id}`)
    return axios.get("/api/stars/" + id);
  },

  // used to modify number of stars up or down
  updateStarValue: function(userData) {
    console.log(`util/API/stars ${userData._id} stars ${userData.stars} data ${userData}`)
    return axios.put("/api/stars/" + userData._id, userData);
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
