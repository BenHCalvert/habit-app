import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import CreateHabitForm from '../CreateHabitForm';

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
        instance.open();
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");

        // instance.close();
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
    // If you want to work on instance of the Modal then you can use the below code snippet 
    let instance = M.Modal.getInstance(this.Modal);
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <>
        {/* <a
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
          Modal
        </a> */}

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
        bottom-sheet class */}
          <div className="modal-content">
            <CreateHabitForm/>
          </div>
          <div className="modal-footer">
            <a href="#" className="modal-close waves-effect waves-purple btn-flat">
              Cancel
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;