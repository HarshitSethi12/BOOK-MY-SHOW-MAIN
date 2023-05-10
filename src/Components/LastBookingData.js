import React, { useContext, useEffect, useState } from "react";
import "../styles/bookingDetails.css";
import { seats } from "../data";
import Loader from "../Components/loader"
import BsContext from "../Context/BsContext";
const LastBookingData = (props) => {
  // Getting movie and change movie components from the context.
  const [lastBooking, setLastBooking] = useState("")    //initializes a state variable lastBooking to an empty string, and sets a function setLastBooking to update the value of lastBooking
  const [loader, setLoader] = useState(false)   //initializes a state variable loader to false, and sets a function setLoader to update the value of loader
  const context = useContext(BsContext);    //This line uses the useContext hook to get the context object from the BsContext provider
  const {lastBookingDatas } = context;  //This line uses object destructuring to get the lastBookingDatas property from the context object. This property is likely used elsewhere in the component
  const getLastRecord = async () => {
    try {
      setLoader(true)
      const res = await fetch(
         "https://bookmyshow-backend-main.onrender.com/api/booking",
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setLastBooking(data.data)
      setLoader(false)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getLastRecord() //calling get last booking api 
  }, [lastBookingDatas]);

  return (

    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking Details:</h2>
      { loader 
          ? <Loader/>
          : lastBooking 
              ? <div>
                  <div className="seats_container">
                    <p className="seats_header">Seats:</p>
                    <ul className="seats">
                      {seats.map((seat, index) => {
                        return (
                          <li className="seat_value" key={index}>
                            {seat}: {Number(lastBooking ? lastBooking?.seats[seat] : "")}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <p className="slot" style={{ textAlign: "left" }}>
                    Slot: <span>{lastBooking?.slot}</span>
                  </p>
                  <p className="movie">
                    Movie: <span>{lastBooking?.movie}</span>
                  </p>
                </div>
              : <p className="no_previous_booking_msg">No Previous Booking Found!</p>
      }
    </div>
  );
};

export default LastBookingData;
