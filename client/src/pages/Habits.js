import React, { useState, useEffect } from "react";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Input from "../components/Input";
import DeleteBtn from "../components/DeleteBtn";
import SubmitBtn from "../components/SubmitBtn";
import AddBtn from "../components/AddButton";
import Nav from "../components/Nav";

function Habits() {
  const [habits, setHabitState] = useState([]);
  // const [habits, setHabitState] = useState([]);
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadHabits()
  }, [])

  function loadHabits() {
    API.getHabits()
      .then(res => {
        setHabitState(res.data);
        console.log("state",res.data);
        console.log("state2",res);
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
  function handleInputChange(e) {
    const { habitName, value } = e.target;
    setFormObject({ ...formObject, [habitName]: value })
  };

  // takes object and calls save endpoint when form is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.habitName && true) {
      API.saveHabit({
        habitName: formObject.habitName,
        weight: formObject.weight,
      })
        .then(res => loadHabits())
        .catch(err => console.log(err));
    }
  };
  // function handleFormSubmit(e) {
  // e.preventDefault();
  // may need to expand this logic out
  // if (formObject.habitName) {
  // API.saveHabit

  // }
  // }

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
          <SubmitBtn
            disabled={!(formObject.habitName)}
            onClick={handleFormSubmit}
          >
            Submit New Habit
          </SubmitBtn>
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
      <AddBtn/>
    </Container>
  );
}

export default Habits;