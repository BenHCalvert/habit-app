import React, { useState, useEffect } from "react";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Input from "../components/Input";
// using btn tied to database AddButton is tied to model
import AddBtnModel from "../components/AddButton";
import AddBtn from "../components/AddBtn";
import Nav from "../components/Nav";
import StarChart from '../components/StarChart';
import Modal from '../components/Modal';
import { useHabitContext } from '../utils/GlobalState';
import { UPDATE_HABITS, REMOVE_HABIT } from '../utils/actions';
import DeleteBtn from "../components/DeleteBtn";

function Habits() {
  // const [habits, dispatch] = useState([]);
  const [formObject, setFormObject] = useState([]);
  const [state, dispatch] = useHabitContext([]);

  const loadHabits = () => {
    API.getHabits()
      .then(res => {
        dispatch({
          type: UPDATE_HABITS,
          habits: res.data
        });
      })
      .catch(err => console.log("error in loadHabit", err));
  };

  const deleteHabit = (id) => {
    console.log("deleteHabit");
    API.deleteHabit(id)
    .then(() => {
      dispatch({
        type: REMOVE_HABIT,
        _id: id
      });
    })
    .catch(err => console.log(err));
    // .then(res => loadHabits())
  }
  // grabs values on change and update onject
  // name is the name of the variable passed in
  // which is evaluated as the variable name in the [] so that that prop
  // set is the value of variable. and then the value is assigned
  // function handleInputChange(e) {
  //   const { name, value } = e.target;
  //   setFormObject({ ...formObject, [name]: value })
  // };

    // takes object and calls save endpoint when form is submitted
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //     console.log("in handleFormSubmit");
  //   if (formObject.habitName && formObject.weight) {
  //     console.log("handleFormSubmit about save",formObject);
  //     API.saveHabit({
  //       date: new Date(Date.now()),
  //       userId: "userId1",
  //       habitName: formObject.habitName,
  //       dayTotal: 14,
  //       weight: formObject.weight

  //     })
  //       .then(res => {
  //         console.log("save done",res);
  //         loadHabits()
  //       })
  //       .catch(err => console.log("error in handleFormSubmit",err));
  //   }
  // };

  useEffect(() => {
    loadHabits()
  }, [])

// debug
console.log("habits : ", state.habits);

// render function
  return (
    <Container fluid>
      <Nav></Nav>
      <Row>
        <h1>Habits you have selected</h1>
        {/* <form>
          Enter Habit:<Input
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
            onClicky={(e) => {handleFormSubmit(e)}}
          />
        </form> */}
      </Row>
      <Row>
        { state.habits.length ? (
          <List>
            {state.habits.map(habit => (
              <ListItem key={habit._id}>
                <Link to={"habits/" + habit._id}>
                  <strong>
                    {habit.habitName}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => deleteHabit(habit._id)}/>
              </ListItem>
            ))}
          </List>
        ) : (
            <h3> No habits yet specified</h3>
          )}
      </Row>
      <Row>
        {/* <StarChart/> */}
        <AddBtnModel/>
        <Modal/>
      </Row>


    </Container>
  );
}

export default Habits;