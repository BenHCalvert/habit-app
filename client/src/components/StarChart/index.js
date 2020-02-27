import React from "react";
import "./style.css";

export function StarChart() {
  return (
    <React.Fragment>
    <span class="starRating">
        <input name="group1" type="radio" checked />
        <input id="rating6" type="radio" name="rating" value="5"></input>
        <label for="rating6">5</label>
        <input id="rating5" type="radio" name="rating" value="5"></input>
        <label for="rating5">5</label>
        <input id="rating4" type="radio" name="rating" value="4"></input>
        <label for="rating4">4</label>
        <input id="rating3" type="radio" name="rating" value="3"></input>
        <label for="rating3">3</label>
        <input id="rating2" type="radio" name="rating" value="2"></input>
        <label for="rating2">2</label>
        <input id="rating1" type="radio" name="rating" value="1"></input>
        <label for="rating1">1</label>
        </span>
</React.Fragment>
  );
}

export default StarChart;

// alt: check this out -> https://www.npmjs.com/package/css-star-rating

