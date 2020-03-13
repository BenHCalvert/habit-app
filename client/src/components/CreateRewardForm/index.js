import React, { useState, useEffect } from "react";
import { useRewardContext } from "../../utils/GlobalRewardState";
import { CREATE_REWARD, UPDATE_REWARD, SET_CURRENT_REWARD } from "../../utils/actions";
import API from "../../utils/API";
import AddBtn from "../AddBtn";
import Input from "../Input";

function CreateRewardForm() {
  // let initialState = "";
  // if ( state.currentReward == undefined) { initialState = state.currentReward };
  const [state, dispatch] = useRewardContext();
  // const [formInput, setFormInput] = useState(state.currentReward);
  console.log("createRewardForm state.currentReward",state.currentReward);

  // const [formInput, setFormInput] = useState(state.currentReward);
  // const [formInput, setFormInput] = useState({ });
  // const [formInput, setFormInput] = useState(false);
  // const [formInput, setFormInput] = useState({ rewardName: "", dayTotal: null, weight: null});
  // creates local state
  const [formInput, setFormInput] = useState({});

  // use Effect calls setFormInput once the state is set force syncronizity
  useEffect(() => {
    console.log("useEffect state.currentReward state.currentReward",state.currentReward);
    setFormInput(state.currentReward);
  },[state.currentReward]);
  // },[]);


  useEffect(() => {
    console.log("use effect formInput",formInput);
  },[formInput]);
  
  // useEffect(()=> {console.log("forminput",formInput)},[formInput]);
  const handleChange = newValue => {
    // setFormInput({...formInput, newValue});
    setFormInput( newValue );
  }

  const handleSubmit = e => {
    e.preventDefault();
    // const href = rewardNameRef.current.value;
    // console.log("handleSubmit href",href);

    if (state.currentReward._id === undefined) {
      console.log("createing new - form",formInput)

      API.saveReward({
        date: new Date(Date.now()),
        userId: "userId1",
        rewardName: formInput.rewardName,
        cost: formInput.cost
      })
      .then(res => {
        console.log("Reward Saved res",res);
        dispatch({
          type: CREATE_REWARD,
          reward: res.data
        });
      })
      .catch(err => console.log(err));
    } else {
      console.log("Updating existing",formInput)

      API.updateReward({
        _id: formInput._id,
        date: formInput.date,
        userId: "userId1",
        rewardName: formInput.rewardName,
        cost: formInput.cost
      })
      .then(res => {
        console.log("Reward update res",res);
        dispatch({
          type: UPDATE_REWARD,
          reward: res.data
        });
      })
      .catch(err => console.log(err));
    }

    // clear form
    // state.currentReward = {};
    dispatch({
      type: SET_CURRENT_REWARD,
      reward: {}
    })

    setFormInput({});
    e.target.rewardName.value = "";
    e.target.cost.value = "";
  };

  return (
    <div>
      <h4> What Reward Would You Like To Add?</h4>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        {/* <Input className="form-control" required ref={rewardNameRef} placeholder="Enter Reward (required)"/> */}
          {/* value={state.currentReward.rewardName}  */}

        {/* <Input name="rewardName"  placeholder="Enter Reward (required)" setFormInput={setFormInput} /> */}
        {/* <Input name="weight" placeholder="Enter weight (1-3)" value={state.currentReward.weight}/> */}
        {/* <Input name="dayTotal" placeholder="Enter days to complete" value={state.currentReward.dayTotal}/> */}

        {/* <Input name="rewardName"  placeholder="Enter Reward (required)" setFormInput={handleChange} formInput={state.currentReward.rewardName}/> */}
        {/* { console.log("render forminput",formInput)} */}
        <Input name="rewardName"  placeholder="Enter Reward (required)" setform={handleChange} input={formInput}/>
        <Input name="cost"  placeholder="cost" setform={handleChange} input={formInput}/>
        <AddBtn/>
      </form>
    </div>
  )
};

export default CreateRewardForm;