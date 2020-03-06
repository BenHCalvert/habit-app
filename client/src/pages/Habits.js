import React, { useState, useEffect } from "react";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
// using btn tied to database AddButton is tied to model
import AddBtnModel from "../components/AddButton";
import Nav from "../components/Nav";
// import StarChart from '../components/StarChart';
import Modal from '../components/Modal';
import { useHabitContext } from '../utils/GlobalState';
import { GET_HABITS, REMOVE_HABIT, SET_CURRENT_HABIT } from '../utils/actions';
import DeleteBtn from "../components/DeleteBtn";

function Habits() {
  const [state, dispatch] = useHabitContext([]);

  const loadHabits = () => {
    API.getHabits()
      .then(res => {
        dispatch({
          type: GET_HABITS,
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
  }

  const setCurrentHabit = (id) => {
    console.log("setCurrentHabit",id);
    API.getHabit(id)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_CURRENT_HABIT,
        habit: res.data
      });
//  try populating global state here
    })
    .catch(err => console.log(err));
  }

  const clearCurrentHabitState = () => {
    dispatch({
      type: SET_CURRENT_HABIT,
      habit: {}
    })
  }

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
      </Row>
      <Row>
        { state.habits.length ? (
          <List>
            {state.habits.map(habit => (
              <ListItem key={habit._id}>
                  {/* <Link to={"habits/" + habit._id}> */}
                  <a className='modal-trigger' data-target='modal1' onClick={() => setCurrentHabit(habit._id)}>
                      {habit.habitName}
                  </a>
                  {/* </Link>  */}
                  {habit.weight}
                  {/* <StarChart/> */}
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
        <a onClick={() => clearCurrentHabitState()}>
          <AddBtnModel />
        </a>
        <Modal/>
      </Row>


    </Container>
  );
}

export default Habits;