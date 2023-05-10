import React, { useContext } from "react";
import RadioButton from "./RadioButton";
import { moviesList } from "../data";
import BsContext from "../Context/BsContext";
import "../styles/selectMovie.css";

const SelectMovieButton = () => {
  const context = useContext(BsContext);

  // Getting movie and change movie components from the context.
  const { movie, changeMovie } = context;

  const handleChangeMovie = (value) => {    //This function is used to handle the change in movie selection. 
                                            //It takes a value as input which represents the selected movie, and then updates the state of movie using the changeMovie function passed down from the context.
    changeMovie(value);

    //setting movie in localstorage
    window.localStorage.setItem("movie", value);
  };

  return (
    <>
      <h1 className="SM_heading">Select a Movie :-</h1>
      <div className="SM_main_container">
        {moviesList.map((el, index) => {      //.map() method loops through the moviesList array and returns a RadioButton component for each item in the array.
          return (
            <RadioButton
              text={el}
              changeSelection={handleChangeMovie}
              data={movie}
              key={index}

              //text: This is the movie name, which is displayed as the label for the radio button.
              //changeSelection: This is the function that is called when the user selects a movie. It is passed the selected movie as an argument.
              //data: This is the currently selected movie. It is used to determine whether the radio button should be checked or unchecked.
              //key: This is a unique identifier for each movie in the list.

            />
          );
        })}
      </div>
    </>
  );
};

export default SelectMovieButton;
