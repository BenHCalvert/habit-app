import React, { createContext, useReducer, useContext } from "react";
import {
  GET_STARS,
  UPDATE_STARS
} from "./actions";

const StarContext = createContext();
const { Provider } = StarContext;

const reducer = (state, action) => {
  switch(action.type) {
    case GET_STARS:
      return {
        ...state,
        stars: [...action.stars],
      };

    case UPDATE_STARS:
      return {
        ...state,
        stars: state.stars.map(star => {
          return star._id === action.star._id ? action.star : star;
        }) // replace matched item and returns the array `
      };

    default:
      return state;
  }
};

const StarProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    stars: {},
  });

  return <Provider value={[state,dispatch]} {...props} />;
};

const useStarContext = () => {
  return useContext(StarContext);
};

export { StarProvider, useStarContext };
