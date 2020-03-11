import React from "react";
import GreyStarPng from "./greyStar.png";
import "./style.css";

const GreyStar = props => {
  return <img onClick={() => { props.handleClick(props.day); }} src={GreyStarPng} alt='gold star' height='35px'></img>;
};

export default GreyStar;