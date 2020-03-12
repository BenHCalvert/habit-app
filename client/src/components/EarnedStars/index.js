import React from "react";
import Star from "./stars.svg";
import "./style.css"

export function EarnedStars(props) {
  return (
    
    <>
    
      {/* <img src="./stars.svg" alt="Stars!"/> */}

      {props.stars}

    </>
  );
}

export default EarnedStars;