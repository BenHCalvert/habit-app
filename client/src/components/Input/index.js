import React from "react";

// This file exports the Input component to be used on where needed

export function Input(props) {
  console.log("in input function",props)
  return (
    <div className="form-group">
      {/* <input className="form-control" {...props} onChange={event => props.setFormInput(event.target.value)}/> */}
      {/* value */}
      {/* onchange */}
      <input 
        className="form-control" 
        {...props} 
        onChange={(e)=>{ props.setFormInput({...props.input, [props.name]: e.target.value});}} 
        value={ props.input[props.name] }
      />
    </div>
  );
}

// this is needed if there is only one function?
export default Input;

