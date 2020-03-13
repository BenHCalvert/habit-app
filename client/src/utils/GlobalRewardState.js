import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_REWARD,
  REMOVE_REWARD,
  GET_REWARDS,
  CREATE_REWARD,
  UPDATE_REWARD
} from "./actions";

const RewardContext = createContext();
const { Provider } = RewardContext;

const reducer = (state, action) => {
  switch(action.type) {
    case GET_REWARDS:
      return {
        ...state,
        rewards: [...action.rewards],
      };

    case CREATE_REWARD:
      return {
        ...state,
        rewards: [action.reward, ...state.rewards]
      };

    case UPDATE_REWARD:
      return {
        ...state,
        rewards: state.rewards.map(reward => {
          return reward._id === action._id ? action.reward : reward;
        }) // replace matched item and returns the array `
      };

    case REMOVE_REWARD:
      return {
        ...state,
        rewards: state.rewards.filter(reward => {
          return reward._id !== action._id;
        })
      };

    case SET_CURRENT_REWARD:
      return {
        ...state,
        currentReward: action.reward
      };

    default:
      return state;
  }
};

      // _id: 0,
      // userId: "",
      // rewardName: "",
      // dayTotal: "",
      // weight: "" 
const RewardProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    rewards: [],
    currentReward: {}
  });

  return <Provider value={[state,dispatch]} {...props} />;
};

const useRewardContext = () => {
  return useContext(RewardContext);
};

export { RewardProvider, useRewardContext };
