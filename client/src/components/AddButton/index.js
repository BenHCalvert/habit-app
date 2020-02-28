import React from "react";
import { Container, Button, Link } from 'react-floating-action-button'

export function AddBtn() {
  return (
    // round button with plus
    <a className="btn-floating btn-large waves-effect waves-light red modal-trigger" data-target='modal1'><i className="material-icons">add</i></a>
  );
}

export default AddBtn;


