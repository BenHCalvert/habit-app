import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import CreateHabitForm from '../CreateHabitForm';
import CreateRewardForm from '../CreateRewardForm';

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
    console.log("model render switch", this.props.type);
              let modalContentType;
              switch (this.props.type) {
              case "habit":   
                modalContentType = <CreateHabitForm/>;
                break;
              case "rewards":
                modalContentType = <CreateRewardForm/>;
                break;
              default:
                modalContentType = "No Form specified";
                break
              }
    return (
      <>
       {/* { console.log("model render return", this.props.type) } */}
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content">
            {[modalContentType]}
          </div>
          <div className="modal-footer">
            <a href="#" className="modal-close waves-effect waves-blue-grey lighten-2 btn-flat">
              Cancel
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;