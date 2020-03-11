import React from "react";
import GreyStarPng from "./greyStar.png";
import "./style.css";

const GreyStar = props => {
  return (
  <React.Fragment>
      <img className='imagio' onClick={() => { props.handleClick(props.day); }} src={GreyStarPng} alt='gold star' height='35px'></img>
  </React.Fragment>
  );
};

export default GreyStar;