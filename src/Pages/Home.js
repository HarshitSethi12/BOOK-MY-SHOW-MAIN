import LastBookingData from "../Components/LastBookingData";
import SelectMovieButton from "../Components/SelectMovieButton";
import SelectSeats from "../Components/SelectSeats";
import TimeShedule from "../Components/TimeShedule";
import "../styles/Home.css";
import BsContext from "../Context/BsContext";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = (props) => {
  const context = useContext(BsContext);
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,    //will be called when the user clicks on the "Book Now" button to confirm the booking of seats.
  } = context;

  //check whether any seat has a negative value.
  const checkNegativeSeatsValidity = (seats) => {   //The purpose of this function is to check if any of the values in the seats object is a negative number.
    for (let seat in seats) {      //the function converts the value of each key in seats to a number using the Number() function.
      if (Number(seats[seat]) < 0) {   
        return true;
      }
    }

    return false;
  };

  //check whether all seats have input 0.
  const checkZeroSeatsValidity = (seats) => {   //The purpose of this function is to check if all the values in the seats object are zero.The function does this by iterating through each key-value pair in the seats object using a for...in loop
    for (let seat in seats) {                   //Inside the loop, the function converts the value of each key in seats to a number using the Number() function. It then checks if the resulting number is greater than zero. 
                                                //If it is, the function immediately returns false, indicating that at least one seat value is greater than zero.
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };

  //validating the user selection and then making post request to save the booking details
  const handleBookNow = () => {       //The code defines a function called handleBookNow which is invoked when the user clicks on the "Book Now" button.
    if (!movie) {
      toast.error('Please select  a movie!', {    //The function first checks if the movie state is empty. 
                                                  //If it is, the function displays an error message using the toast.error method from the react-toastify library. 
                                                  //This error message informs the user that they need to select a movie before proceeding.
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else if (!time) {     //the function checks if the time state is empty. 
                            //If it is, the function displays another error message using toast.error method. 
                            //This error message informs the user that they need to select a show time before proceeding.
      toast.error('Please select a time slot!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } 
    else if (                   
      checkNegativeSeatsValidity(noOfSeat) ||
      checkZeroSeatsValidity(noOfSeat)            //the function calls two helper functions - checkNegativeSeatsValidity and checkZeroSeatsValidity - to validate the noOfSeat state.
    ) {
      toast.error('Invalid Seats!', {           
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      //validation successfull
      handlePostBooking();              //the function calls the handlePostBooking function to confirm the booking and displays a success message using toast.success method. 
                                      //This success message informs the user that their booking was successful. This function helps to ensure that the user cannot book seats without first selecting a movie, a show time and a valid number of seats.
      toast.success('Booking successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container">  {/* The code renders a ToastContainer component, which is a part of the react-toastify library that displays success and error messages to the user. */}
        <div className="selection_container"> {/* The div element with className="selection_container" contains two components - SelectMovieButton and LastBookingData. These components allow the user to select a movie and display the details of their last booking. */}
          <div className="wrapper">
            <div className="select_movie_component">
              <SelectMovieButton />
            </div>
            <div className="last_booking_details_container">
              <LastBookingData />
            </div>
          </div>
          <div className="time_seats_container">  {/* The div element with className="time_seats_container" contains two more components - TimeShedule and SelectSeats. These components allow the user to select a show time and the number of seats they want to book. */}
            <TimeShedule />
            <SelectSeats />
            <button         //The onClick event handler is set to call the handleBookNow() function when the button is clicked.
              onClick={() => {
                handleBookNow();
              }}
              className="BN-btn ">
              Book Now 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
