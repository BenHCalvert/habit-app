import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_HABIT,
  REMOVE_HABIT,
  UPDATE_HABITS,
  CREATE_HABIT
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch(action.type) {
    case UPDATE_HABITS:
      return {
        ...state,
        habits: [...action.habits],
      };

    case CREATE_HABIT:
      return {
        ...state,
        habits: [action.habit, ...state.habits]
      };

    case REMOVE_HABIT:
      return {
        ...state,
        habits: state.habit.filter((habit) => {
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

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    habits: [],
    currentHabit: {
      _id: 0,
      userId: "",
      habitName: "",
      dayTotal: 14,
      weight: 1
    }
  });

  return <Provider value={[state,dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
