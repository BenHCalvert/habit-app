import React from "react";
import Star from "./stars.svg";

export function EarnedStars(props) {
  return (
    <>
      {/* <img src="./stars.svg" alt="Stars!"/> */}
      <h5> You have {props.stars} earned!</h5>
    </>
  );
}

export default EarnedStars;