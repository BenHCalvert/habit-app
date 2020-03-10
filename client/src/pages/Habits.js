import React, { useState, useEffect } from "react";
import API from "../utils/API";

import { Row, Container } from "../components/Grid";

import AddBtnModal from "../components/AddBtnModal";
import DeleteBtn from "../components/DeleteBtn";
import EarnedStars from "../components/EarnedStars";
import Modal from '../components/Modal';
import StarChart from '../components/StarChart';
import { UserConsumer } from '../context';

import { useHabitContext } from '../utils/GlobalHabitState';
import { updateStars } from '../utils/StarCountManager';

import { GET_HABITS, REMOVE_HABIT, SET_CURRENT_HABIT, ADD_STARS } from '../utils/actions';


import "./style.css";

function Habits(props) {
  const [state, dispatch] = useHabitContext([]);

  const loadHabits = () => {
    API.getHabits()
      .then( res => {
        console.log("getHabits",res)
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
  // }, [state.habits])

// debug
console.log("habits : ", state.habits);

let username = "Thunder";

// render function
  return (
   
    <Container fluid> 
    <UserConsumer>
    {({ data }) => (
      <Row>
        <h3>Keep up the good work {data.user.firstname} </h3>
        
        <EarnedStars/>
      </Row>)}
      </UserConsumer>
      <Row>
        { state.habits.length ? (
          <table>
            <thead>
              <tr>
                <th>Habit</th>
                
                <th>This weeks Chart</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {state.habits.map(habit => (
                <tr>
                  <td className='hilite'>
                    <span className='modal-trigger' data-target='modal1' onClick={() => setCurrentHabit(habit._id)}>
                      {habit.habitName}
                    </span>
                  </td>
                  <td>
                    {habit.weight}
                  </td>
                  <td>
                    {/* <StarChart/> */} <span onClick={() => updateStars(username)}>starchart here </span>
                  </td>
                  <td>
                    <DeleteBtn onClick={() => deleteHabit(habit._id)}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3> No habits yet specified</h3>
        )}
      </Row>
      <Row>
        <span onClick={() => clearCurrentHabitState()}>
         <AddBtnModal />
        </span>

        <Modal type="habit"/>
      </Row>

</Container>
  );
}

export default Habits;