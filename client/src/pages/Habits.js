import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Input from "../components/Input";
// import DeleteBtn from "../components/DeleteBtn";
// import SubmitBtn from "../components/SubmitBtn";
import AddBtn from "../components/AddButton";
import Nav from "../components/Nav";

function Habits() {
  const [habits, setHabitState] = useState([]);
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadHabits()
  }, [])

  function loadHabits() {
    API.getHabits()
      .then(res => {
        setHabitState(res.data);
        console.log("res.data",res.data);
        // this works this way
        console.log("state - habits",habits);
        }
      )
      .catch(err => console.log("error in loadHabit", err));
  };

  function deleteHabit(id) {
    API.deleteHabit(id)
    .then(res => loadHabits())
    .catch(err => console.log(err));
  }

  // grabs values on change and update onject
  // name is the name of the variable passed in
  // which is evaluated as the variable name in the [] so that that prop
  // set is the value of variable. and then the value is assigned
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // takes object and calls save endpoint when form is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
      console.log("in handleFormSubmit");
    if (formObject.habitName && formObject.weight) {
      console.log("handleFormSubmit about save",formObject);
      API.saveHabit({
        date: new Date(Date.now()),
        userId: "userId1",
        habitName: formObject.habitName,
        // dayTotal: formObject.days,
        dayTotal: 14,
        weight: formObject.weight
      })
        .then(res => {
          console.log("save done",res);
          loadHabits()
        })
        .catch(err => console.log("error in handleFormSubmit",err));
    }
  };

  console.log("habits : ",habits);
  // render function
  return (
    <Container fluid>
      <Nav></Nav>
      <Row>
        <h1>Habits you have selected</h1>
        <form>
          Enter Habit: <Input
            onChange={handleInputChange}
            name="habitName"
            placeholder="Habit (required)"
          />

          Enter Weight of Habit<Input
            onChange={handleInputChange}
            name="weight"
            placeholder="Weight (required)"
          />
          <AddBtn
            // disabled={!(formObject.habitName) && !(formObject.weight)}
            // onclicky is a name which is defined (map) in the addBtn component
            // onClicky={(e) =>{ console.log("hey cool"); e.preventDefault(); handleFormSubmit(); }}
            onClicky={(e) =>{ handleFormSubmit(e); }}
            
          />
        </form>
      </Row>
      <Row>
        {habits.length ? (
          <List>
            {habits.map(habit => (
              <ListItem key={habit._id}>
                <Link to={"habits/" + habit._id}>
                  <strong>
                    {habit.habitName}
                  </strong>
                </Link>
              </ListItem>
            ))}
          </List>
        ) : (
            <h3> No Resutls to Display</h3>
          )}
      </Row>
    </Container>
  );
}

export default Habits;