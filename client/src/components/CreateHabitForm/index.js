import React, { useState, useEffect } from "react";
import { useHabitContext } from "../../utils/GlobalState";
import { CREATE_HABIT, UPDATE_HABIT, SET_CURRENT_HABIT } from "../../utils/actions";
import API from "../../utils/API";
import AddBtn from "../AddBtn";
import Input from "../Input";

function CreateHabitForm() {
  // let initialState = "";
  // if ( state.currentHabit == undefined) { initialState = state.currentHabit };
  const [state, dispatch] = useHabitContext();
  // const [formInput, setFormInput] = useState(state.currentHabit);
  console.log("createHabitForm state.currentHabit",state.currentHabit);

  // const [formInput, setFormInput] = useState(state.currentHabit);
  // const [formInput, setFormInput] = useState({ });
  // const [formInput, setFormInput] = useState(false);
  // const [formInput, setFormInput] = useState({ habitName: "", dayTotal: null, weight: null});
  // creates local state
  const [formInput, setFormInput] = useState({});

  // use Effect calls setFormInput once the state is set force syncronizity
  useEffect(() => {
    console.log("useEffect state.currentHabit state.currentHabit",state.currentHabit);
    setFormInput(state.currentHabit);
  },[state.currentHabit]);
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
    // const href = habitNameRef.current.value;
    // console.log("handleSubmit href",href);

    if (state.currentHabit._id === undefined) {
      console.log("createing new - form",formInput)

      API.saveHabit({
        date: new Date(Date.now()),
        userId: "userId1",
        habitName: formInput.habitName,
        dayTotal: formInput.dayTotal,
        weight: formInput.weight
      })
      .then(res => {
        console.log("Habit Saved res",res);
        dispatch({
          type: CREATE_HABIT,
          habit: res.data
        });
      })
      .catch(err => console.log(err));
    } else {
      console.log("Updating existing",formInput)

      API.updateHabit({
        _id: formInput._id,
        date: formInput.date,
        userId: "userId1",
        habitName: formInput.habitName,
        dayTotal: formInput.dayTotal,
        weight: formInput.weight
      })
      .then(res => {
        console.log("Habit update res",res);
        dispatch({
          type: UPDATE_HABIT,
          habit: res.data
        });
      })
      .catch(err => console.log(err));
    }

    // clear form
    // state.currentHabit = {};
    dispatch({
      type: SET_CURRENT_HABIT,
      habit: {}
    })

    setFormInput({});
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
        {/* { console.log("render forminput",formInput)} */}
        <Input name="habitName"  placeholder="Enter Habit (required)" setform={handleChange} input={formInput}/>
        <Input name="weight"  placeholder="weight" setform={handleChange} input={formInput}/>
        <Input name="dayTotal"  placeholder="dayTotal" setform={handleChange} input={formInput}/>
        <AddBtn/>
      </form>
    </div>
  )
};

export default CreateHabitForm;