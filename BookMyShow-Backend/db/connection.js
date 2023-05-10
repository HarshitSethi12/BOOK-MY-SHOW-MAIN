const { MongoClient } = require("mongodb");
let mongoose = require("mongoose");
require("dotenv").config();

// for production use this 
const mongoLiveURI = process.env.MONGO_LIVE_URL;

// for development use this
const mongoLocalURI = "mongodb://localhost:27017/movie_ticket";
// const mongoURI = "mongodb://localhost:27017/bookMovie" + "bookMovie"

const connectToMongo = async () => {  //a function named connectToMongo which connects to the database using the mongoose.connect() method
  // Connecting to database using connection string and speciying if there is any error or it was successfull
  mongoose
.connect( mongoLocalURI, 
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }
    )
    .then(() => {
      console.log("Database connected");    //The method takes two arguments: the connection string and an options object. If the connection is successful, the console logs a message saying "Database connected"
    })
    .catch((err) => {
      console.log("Database connection error", err);  //If there is an error, the console logs a message saying "Database connection error" along with the error message.
    });
};

exports.connection = connectToMongo;    //The function is exported as connection, which can be imported and used in other files to establish a connection to the MongoDB database.
