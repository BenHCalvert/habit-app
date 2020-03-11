import React from "react";

export function AddBtn(props) {

  return (
    // round button with plus
    // this works on the form where onClicky can be called
    // <button className="btn-floating btn-large waves-effect waves-light green" onClick={props.onClicky}><i className="material-icons">add</i></button>
    <button className="modal-close btn-floating btn-large waves-effect waves-blue-grey lighten-2" ><i className="material-icons">add</i></button>
  );
}

export default AddBtn;