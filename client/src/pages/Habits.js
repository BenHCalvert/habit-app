import React, { useState, useEffect } from "react";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Input from "../components/Input";

function Habits() {
  const [habits, setHabits] = useState([]);
  const [formObject, setFormObject] = useState([]);

  useEffect(() => {
    loadHabits()
  }, [])

  function loadHabits() {
   API.getHabit()
    .then(res =>
      setHabits(res.data)
    ) 
    .catch(err => console.log("error in loadHabit", err));
  };

  // grabs values on change and update onject
  function handleInputChange(e) {
    const { habitName, value } = e.target;
    setFormObject({...formObject, [habitName]: value})
  };

  // takes object and calls save endpoint when form is submitted
  // function handleFormSubmit(e) {
    // e.preventDefault();
    // may need to expand this logic out
    // if (formObject.habitName) {
      // API.saveHabit

    // }
  // }

  return (
    <Container fluid>
      <Row>
        <h1>Habits you have selected</h1>
        <form>
          <Input
            onChange={handleInputChange}
            name="habitName"
            placeholder="Habit (required)"
          />
        </form>
      </Row>
      <Row>

      {habits.length ? (
        <List>
          <ListItem key={habits._id}>
            <Link to={"habits/" + habits._id}>
              <strong>
                {habits.habitName}
              </strong>
            </Link>
          </ListItem>
        </List>
    ) : (
      <h3> No Resutls to Display</h3>
    )}
      </Row>
    </Container>
  );
}

export default Habits;