import React, { useContext } from "react";
import RadioButton from "./RadioButton";
import { slots } from "../data";
import "../styles/timeShedule.css";
import BsContext from "../Context/BsContext";

const TimeShedule = () => {
  const context = useContext(BsContext);

  // Getting time and change changeTime components from the context.
  const { time, changeTime } = context;         //The time state represents the selected time slot, and the changeTime function is used to update the time state.

  const handleChangeTimeOnSubmit = (value) => {   //The handleChangeTimeOnSubmit function is called when a new time slot is selected. 
                                                  //It takes the value argument, which is the new selected time slot. The function updates the time state by calling the changeTime function and passing in the new value.
    changeTime(value);                      //The function also sets the selected time slot value in the local storage using the window.localStorage.setItem method. 
                                            //This allows the selected time slot to persist even after the user refreshes or closes the browser window.

    //setting slot in localstorage
    window.localStorage.setItem("slot", value); //The function also sets the selected time slot value in the local storage using the window.localStorage.setItem method. 
                                                //This allows the selected time slot to persist even after the user refreshes or closes the browser window.
  };

  return (
    <>
      <div className="Slot_container">
        <h1 className="TS_heading">Select a Schedule :-</h1>
        <div className="TS_main_container">
          {slots.map((el, index) => {
            return (
              <RadioButton        //The RadioButton component is passed the slot's text as its "text" prop, and the handleChangeTimeOnSubmit function as its "changeSelection" prop. 
                                  //The "data" prop is set to the "time" state variable and is used to check whether this RadioButton is currently selected.
                text={el}
                changeSelection={handleChangeTimeOnSubmit}  //When a user clicks on a RadioButton, the handleChangeTimeOnSubmit function is called with the selected value, which updates the "time" state variable using the "changeTime" function. 
                                                            //It also stores the selected slot in local storage using the "window.localStorage.setItem" method.
                data={time}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeShedule;
