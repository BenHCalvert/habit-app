import API from "./API";

const loadStars = (id) => {
  API.getStars(id)
    .then( res => {
      console.log("getstars",res)
    })
    .catch(err => console.log("error in loadHabit", err));
};

const updateStars = (id,func,val) => {
  console.log(`updateStars first: ${id},${func},${val}`);

  API.getStars(id)
    .then( res => {
      console.log("getstars",res.data)
    })

  API.getStars(id)
  .then( res => {
  console.log(`returned stars in updateStars: ${res.data.stars},${id},${func},${val}`);
    switch(func) {
      case "-":
        res.data.stars = res.data.stars - val
        break;
      default:
        res.data.stars = res.data.stars + val
        break;
    }

    console.log(`data ${res.data._id} - ${res.data.stars}`);
    return(res.data)
  })
  .then( data => {
    console.log(`then data ${data._id} ${data.stars}`);
    API.updateStarValue(data)
      .then( res => {
        console.log("update star value res",res)
      })
  })
  .catch(err => console.log("error in updatestars", err));
};

export { loadStars, updateStars };