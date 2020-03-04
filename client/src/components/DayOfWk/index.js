import React from "react";

const DayOfWk = ({ handleClick, day }) => {
  return (
    <p onClick={() => { handleClick(day); }}>
      {day}
    </p>
  );
};

export default DayOfWk;