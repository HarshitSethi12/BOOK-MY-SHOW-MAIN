import React from "react";
import "../styles/seats.css";

const SeatsInput = ({
  changeNoOfSeats,
  noOfSeat,
  changeSeats,
  seat,
  text,
  index,
}) => {
  //changing the seats according to user input
  const change_seats = (e) => {   //This code defines a function called change_seats which takes an event object e as an argument.
    console.log("seat", seat);    //logs the current values of the seat, noOfSeat, and text states.
    console.log("noOfSeat", noOfSeat);
    console.log("text", text);
    changeNoOfSeats({ ...noOfSeat, [e.target.name]: Number(e.target.value) });  // function updates the noOfSeat state using the spread operator to copy the existing state and then overwriting the property with the same name as e.target.name with the new value of e.target.value converted to a number using the Number() function.

    //Overall, this function is used to update the noOfSeat state when the user changes the number of seats they want to book.

    //setting seats in localsorage
    window.localStorage.setItem(
      "seats",
      JSON.stringify({
        ...noOfSeat,
        [e.target.name]: Number(e.target.value),
        //The key is "seats", and the value is an object that contains all the current seat selections, as well as the newly updated value for the seat that was just changed. 
        //The values in the object are converted to JSON format using JSON.stringify before being stored in local storage.
      })
    );
  };

  //highlighting the seat
  const handleChecked = (text) => {
    changeSeats(text);
  };

  //Below mentioned code is rendering a component that displays a seat with an input field that allows users to select the number of seats they want to book.
  return (
    <div
      name={text}
      className={`form-check-label seats ${
        seat === text ? "active" : "inactive"
      }`}
      id={`${index}text`}
      onClick={() => {
        handleChecked(text, index);
      }}>
      <span className={"text"}>{text}</span>
      <input
        type="number"
        className="seats-input"
        placeholder="0"
        name={text}
        min="0"
        id={`${index}input`}
        max="30"
        onChange={change_seats}
        // value={noOfSeat[text]}
      />
    </div>
  );
};

export default SeatsInput;
