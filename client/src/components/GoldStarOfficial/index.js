import React from "react";
import GoldStarPng from "./goldStar.png";
import "./style.css";

const GoldStar = props => {
  return <img onClick={() => { props.handleClick(props.day); }} src={GoldStarPng} alt='gold star' height='35px'></img>;
};

export default GoldStar;