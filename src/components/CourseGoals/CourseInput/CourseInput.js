import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length>0){
      setValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValid(false);
      return;
    } else {
      props.onAddGoal(enteredValue);

    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid':''}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}/>
        </div>
        <div className={`form-control ${!isValid ? 'invalid':''}`}>
      <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;
