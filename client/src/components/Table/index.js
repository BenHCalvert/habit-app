import React from "react";

// This file exports the Input component to be used on where needed

export function Table({ children }) {
  console.log("in table function",props)
  return (
    <table className='highlight'>
    </table>
  );
}

export function TableHeader({ children }) {
  return (
    <th/>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

// this is needed if there is only one function?
export {Table, TableHeader } Input;