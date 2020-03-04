import React, { useState, useEffect } from "react";
import { useHabitContext } from "../../utils/GlobalState";
import { CREATE_HABIT, UPDATE_HABITS } from "../../utils/actions";
import API from "../../utils/API";
import AddBtn from "../AddBtn";
import Input from "../Input";
import { startSession } from "mongoose";

function CreateHabitForm() {
  // let initialState = "";
  // if ( state.currentHabit == undefined) { initialState = state.currentHabit };
  const [state, dispatch] = useHabitContext();
  // const [formInput, setFormInput] = useState(state.currentHabit);
  console.log("createHabitForm",state.currentHabit);

  // const [formInput, setFormInput] = useState(state.currentHabit);
  // const [formInput, setFormInput] = useState({ });
  // const [formInput, setFormInput] = useState(false);
  // const [formInput, setFormInput] = useState({ habitName: "", dayTotal: null, weight: null});
  // creates local state
  const [formInput, setFormInput] = useState(false);

  // use Effect calls setFormInput once the state is set force syncronizity
  useEffect(() => {
    console.log("herehere",state.currentHabit);
    setFormInput(state.currentHabit);
  },[state.currentHabit]);


  useEffect(() => {
    console.log("formInput",formInput);
  },[formInput]);
  
  // useEffect(()=> {console.log("forminput",formInput)},[formInput]);
  const handleChange = newValue => {
    // setFormInput({...formInput, newValue});
    setFormInput( newValue );
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit",e.target);
    // const href = habitNameRef.current.value;
    // console.log("handleSubmit href",href);

    let newDate = "";
    if (!state.currentState) {
      newDate = new Date(Date.now());
    } else {
      newDate = state.currentHabit.date;
    }

      // habitName: e.target.habitName.value,
      // dayTotal: e.target.dayTotal.value,
      // weight: e.target.weight.value
      // if new call save vs update
    API.saveHabit({
      date: newDate,
      userId: "userId1",
      habitName: formInput.habitName,
      dayTotal: formInput.dayTotal,
      weight: formInput.weight
    })
    .then(res => {
      console.log("Habit Saved",res);

      if (formInput){
        // need to fix the reducer
        // type: UPDATE_HABITS,
        console.log("update here");
      dispatch({
        type: CREATE_HABIT,
        habit: res.data
      });

      } else {

      dispatch({
        type: CREATE_HABIT,
        habit: res.data
      });
      }

    })
    .catch(err => console.log(err));

    // clear form
    // habitNameRef.current.value = "";
    e.target.habitName.value = "";
    e.target.weight.value = "";
    e.target.dayTotal.value = "";

  };

  return (
    <div>
      <h3> What habit to start you?</h3>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        {/* <Input className="form-control" required ref={habitNameRef} placeholder="Enter Habit (required)"/> */}
          {/* value={state.currentHabit.habitName}  */}

        {/* <Input name="habitName"  placeholder="Enter Habit (required)" setFormInput={setFormInput} /> */}
        {/* <Input name="weight" placeholder="Enter weight (1-3)" value={state.currentHabit.weight}/> */}
        {/* <Input name="dayTotal" placeholder="Enter days to complete" value={state.currentHabit.dayTotal}/> */}

        {/* <Input name="habitName"  placeholder="Enter Habit (required)" setFormInput={handleChange} formInput={state.currentHabit.habitName}/> */}
        <Input name="habitName"  placeholder="Enter Habit (required)" setFormInput={handleChange} input={formInput}/>
        <Input name="weight"  placeholder="weight" setFormInput={handleChange} input={formInput}/>
        <Input name="dayTotal"  placeholder="dayTotal" setFormInput={handleChange} input={formInput}/>
        <AddBtn/>
      </form>
    </div>
  )
};

export default CreateHabitForm;