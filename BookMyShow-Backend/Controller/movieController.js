const BookingModel = require("../Schema/bookMovieSchema")       //imports the bookMovieSchema module from the ../Schema directory and assigns it to the BookingModel variable using the require function

const storeBooking = async (req, res) => {      //defines a function named storeBooking that accepts two parameters req and res, which represent the HTTP request and response, respectively.
    try {
        const { movie, slot, seats } = req.body;

        const myData = new BookingModel({ movie, slot, seats });    //This line extracts the movie, slot, and seats fields from the request body using object destructuring.
        const data = await myData.save();

        return res.status(200).json({       //This line sets the HTTP status code of the response to 200 and returns a JSON response containing a success message, HTTP status code, and the booking data that was saved
            message:"Booking successful",
            status:200,
            data:data
        })
    } catch (error) {
        console.log("error", error.message);    //This sets the HTTP status code of the response to 500 and returns a JSON response containing an error message, HTTP status code, and an empty data object.
        return res.status(500).json({
            message:"something went wrong!",
            status:500,
            data:{}
        })
    }
}

const getBooking = async (req, res) => {        //The first function, storeBooking, is an asynchronous function that takes in a request and response object. Inside the try block, it destructures the movie, slot, and seats properties from the request body.
    try {                                       //It then creates a new instance of the BookingModel schema, passing in the movie, slot, and seats properties. It then saves the data to the database using the save method and returns a JSON response with a success message, HTTP status code of 200, and the saved data.
        // find last booking of user 
        const [data] = await BookingModel.find().sort({_id:-1}).limit(1)
        
        //getBooking, is also an asynchronous function that takes in a request and response object. 
        //Inside the try block, it finds the last booking in the BookingModel schema using the find method, sorting by _id in descending order and returning only the first result. If no booking is found, it returns a JSON response with a message indicating no booking was found. Otherwise, it returns a JSON response with a success message, HTTP status code of 200, and the data of the last booking. 
        //If there's an error, it returns a JSON response with an error message, HTTP status code of 500, and an empty data object.
        
        if (data.length === 0) {
            // if no booking found then print this message
            return res.status(200).json({
                message:"No previous Booking found!",
                status:200,
                data:null
            })    
        }
        
        // have any booking then print this message
        return res.status(200).json({
            message:"last booking!",
            status:200,
            data:data
        })
        
    } catch (error) {
        console.log("error", error.message);
        return res.status(500).json({
            message:"something went wrong!",
            status:500,
            data:{}
        })
    }
    //This catch block handles errors that may occur while executing the try block of the storeBooking function. 
    //If an error occurs, the error message is logged to the console and an HTTP response with a status code of 500 is sent back to the client with a JSON object containing an error message, status code, and empty data object. This is a common pattern for error handling in Node.js and helps to ensure that errors are properly caught and handled.
}

module.exports = { storeBooking, getBooking }