import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_HABIT,
  REMOVE_HABIT,
  GET_HABITS,
  CREATE_HABIT,
  UPDATE_HABIT
} from "./actions";

const HabitContext = createContext();
const { Provider } = HabitContext;

const reducer = (state, action) => {
  switch(action.type) {
    case GET_HABITS:
      return {
        ...state,
        habits: [...action.habits],
      };

    case CREATE_HABIT:
      return {
        ...state,
        habits: [action.habit, ...state.habits]
      };

    case UPDATE_HABIT:
      return {
        ...state,
        habits: state.habits.map(habit => {
          return habit._id === action._id ? action.habit : habit;
        }) // replace matched item and returns the array `
      };

    case REMOVE_HABIT:
      return {
        ...state,
        habits: state.habits.filter(habit => {
          return habit._id !== action._id;
        })
      };

    case SET_CURRENT_HABIT:
      return {
        ...state,
        currentHabit: action.habit
      };

    default:
      return state;
  }
};

const HabitProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    habits: [],
    currentHabit: {}
  });

  return <Provider value={[state,dispatch]} {...props} />;
};

const useHabitContext = () => {
  return useContext(HabitContext);
};

export { HabitProvider, useHabitContext };
