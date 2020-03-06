import React from "react";
import { Container, Button, Link } from 'react-floating-action-button'

export function AddBtnModel() {
  return (
    // round button with plus
    <span className="btn-floating btn-large waves-effect waves-light red modal-trigger" data-target='modal1'><i className="material-icons">add</i></span>
  );
}

export default AddBtnModel;