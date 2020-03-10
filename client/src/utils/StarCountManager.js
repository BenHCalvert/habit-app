import API from "./API";

const loadStars = () => {
  API.getStars()
    .then( res => {
      console.log("getstars",res)
    })
    .catch(err => console.log("error in loadHabit", err));
};

const updateStars = (req) => {
  console.log("updateStars",req);
  let data = {
    userName: "Thunder",
    stars: 10
  };

  API.updateStarValue(data)
    .then( res => {
      console.log("getstars",res)
    })
    .catch(err => console.log("error in loadHabit", err));
};

export { loadStars, updateStars };