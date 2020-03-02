import React, { useRef } from "react";
// import { useStoreContext } from "../../utils/GlobalState";
import { CREATE_HABIT } from "../../utils/actions";
import API from "../../utils/API";
import AddBtn from "../AddBtn";
import Input from "../Input";

function CreateHabitForm() {
  // const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit",e.target);

    API.saveHabit({
      date: new Date(Date.now()),
      userId: "userId1",
      habitName: e.target.habitName.value,
      dayTotal: 14,
      weight: e.target.weight.value
    })
    .then(res => {
      console.log("Habit Saved",res);
  //     dispatchEvent({
  //       type: CREATE_HABIT,
  //       habit: res.data
  //     });
    })
    .catch(err => console.log(err));
  };

  return (
    <div>
      <h3> What habit to start you?</h3>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <Input name="habitName" placeholder="Enter Habit (required)"/>
        <Input name="weight" placeholder="Enter weight (1-3)"/>
        <AddBtn className="modal-close"/>
      </form>
    </div>
  )
};

export default CreateHabitForm;