import React, { useState, useEffect } from "react";
import API from "../utils/API";

import { Row, Container } from "../components/Grid";

import AddBtnModal from "../components/AddBtnModal";
import DeleteBtn from "../components/DeleteBtn";
import EarnedStars from "../components/EarnedStars";
import Modal from '../components/Modal';
import Nav from "../components/Nav";
import StarChart from '../components/StarChart';

import { useRewardContext } from '../utils/GlobalRewardState';
import { GET_REWARDS, REMOVE_REWARD, SET_CURRENT_REWARD } from '../utils/actions';

import "./style.css";

function Rewards() {
  const [state, dispatch] = useRewardContext([]);

  const loadRewards = () => {
    console.log('load rewards in reward page');
    API.getRewards()
      .then(res => {
        console.log("getRewards",res)
        dispatch({
          type: GET_REWARDS,
          rewards: res.data
        });
      })
      .catch(err => console.log("error in loadReward", err));
  };

  const deleteReward = (id) => {
    console.log("deleteReward");
    API.deleteReward(id)
    .then(() => {
      dispatch({
        type: REMOVE_REWARD,
        _id: id
      });
    })
    .catch(err => console.log(err));
  }

  const setCurrentReward = (id) => {
    console.log("setCurrentReward",id);
    API.getReward(id)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_CURRENT_REWARD,
        reward: res.data
      });
//  try populating global state here
    })
    .catch(err => console.log(err));
  }

  const clearCurrentRewardState = () => {
    dispatch({
      type: SET_CURRENT_REWARD,
      reward: {}
    })
  }

  useEffect(() => {
    loadRewards()
  }, [state])

// debug
console.log("rewards : ", state.rewards);

// render function
  return (
    <Container fluid>
      <Row>
        <h3>Add or redeem reward</h3>
        {/* <EarnedStars/> */}
      </Row>
      <Row>
        { state.rewards.length ? (
          <table>
            <thead>
              <tr>
                <th>Reward</th>
                <th>Cost</th>
                <th>Redeem weeks Chart</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {state.rewards.map(reward => (
                <tr>
                  <td className='hilite'>
                    <span className='modal-trigger' data-target='modal1' onClick={() => setCurrentReward(reward._id)}>
                      {reward.rewardName}
                    </span>
                  </td>
                  <td>
                    {reward.cost}
                  </td>
                  <td>
                    {/* <StarChart/> */} redeem here
                  </td>
                  <td>
                    <DeleteBtn onClick={() => deleteReward(reward._id)}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3> No rewards yet specified</h3>
        )}
      </Row>
      <Row>
        <span onClick={() => clearCurrentRewardState()}>
          <AddBtnModal/>
        </span>
        <Modal type="rewards"/>
      </Row>
</Container>
  );
}

export default Rewards;