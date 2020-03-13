import React from "react";
import GreyStarPng from "./greyStarTu.png";
import "./style.css";

const GreyStarTu = props => {
  return (
  <React.Fragment>
      <img className='imagio' onClick={() => { props.handleClick(props.day); }} src={GreyStarPng} alt='gold star' height='35px'></img>
  </React.Fragment>
  );
};

export default GreyStarTu;