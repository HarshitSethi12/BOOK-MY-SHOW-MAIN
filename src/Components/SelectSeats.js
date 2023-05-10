import React, { useState, useContext } from "react";
import { seats } from "../data";
import "../styles/selectSeats.css";
import BsContext from "../Context/BsContext";
import SeatsInput from "./SeatsInput";

const SelectSeats = () => {
  const [seat, changeSeats] = useState([]);   //The component is using the useState hook to declare a seat state variable which is initially set to an empty array. 
                                              //The changeSeats function is used to update the seat state variable.
  const context = useContext(BsContext);  
  const { noOfSeat, changeNoOfSeats } = context; //The noOfSeat property holds the number of seats currently selected by the user, and the changeNoOfSeats function is used to update the number of seats selected.
      //The SelectSeats component is responsible for rendering the seat selection interface and updating the seat and noOfSeat states based on user selection.

  return (
    <>
      <div className="SS_wrapper">
        <h1 className="SS_heading">Select Seats :-</h1>
        <div className="SS_main_container">
          {seats.map((el, index) => {   //This line starts a map function on an array called "seats". 
                                        //The map function loops through each element of the array and returns a new array with modified elements.
            console.log("el", el)
            return (
              <SeatsInput       //This line returns a JSX element called "SeatsInput" with several props passed to it. 
                                //The props include "seat", "key", "index", "changeSeats", "noOfSeat", "text", and "changeNoOfSeats". 
                                //The exact purpose of each prop depends on the implementation of the "SeatsInput" component.
                seat={seat}
                key={index}
                index={index}
                changeSeats={changeSeats}
                noOfSeat={noOfSeat}
                text={el ?? ""}
                changeNoOfSeats={changeNoOfSeats}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectSeats;
