import React from "react";

// This file exports the Input component to be used on where needed

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

// this is needed if there is only one function?
export default Input;