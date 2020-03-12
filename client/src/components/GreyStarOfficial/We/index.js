import React from "react";
import GreyStarPng from "./greyStarWe.png";
import "./style.css";

const GreyStarWe = props => {
  return (
  <React.Fragment>
      <img className='imagio' onClick={() => { props.handleClick(props.day); }} src={GreyStarPng} alt='gold star' height='35px'></img>
  </React.Fragment>
  );
};

export default GreyStarWe;