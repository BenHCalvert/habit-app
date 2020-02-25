import React, { useState, useEffect } from "react";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Input from "../components/Input";
import DeleteBtn from "../components/DeleteBtn";
import SubmitBtn from "../components/SubmitBtn";

function Habits() {
  const [habitState, setHabitState] = useState([]);
  console.log("Habits func - habits",habitState);
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadHabits()
  }, [])

  function loadHabits() {
   API.getHabit()
    .then(res =>
      setHabitState(res.data)
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
    setFormObject({...formObject, [habitName]: value})
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

  return (
    <Container fluid>
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
          </SubmitBtn>
        </form>
      </Row>
      <Row>

{console.log("habit.length",habitState.length)};

      {habitState === undefined ? (
        <List>

          {habitState.map(e => (
            <ListItem key={e._id}>
              <List to={"/habits/" + e._id}>
                <strong>
                  {e.habitName}
                </strong>
              </List>
              <DeleteBtn onClick={() => deleteHabit(e._id)} />
            </ListItem>
          ))}
        </List>
    ) : (
<>
      {console.log("habits",habitState)}
      <h3> No Resutls to Display</h3>
</>
    )}
      {console.log("habits",typeof habits)}
      </Row>
    </Container>
  );
}

export default Habits;