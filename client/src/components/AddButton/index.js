import React from "react";

export function AddBtn(props) {

  return (
    // round button with plus
    <button className="btn-floating btn-large waves-effect waves-light red" onClick={props.onClicky}><i className="material-icons">add</i></button>
  );
}

export default AddBtn;