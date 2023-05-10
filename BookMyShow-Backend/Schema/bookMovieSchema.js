const mongoose = require('mongoose');
const { Schema } = mongoose;

// Created a new schema for pushing movie booking details.
const bookMovieSchema = new Schema({    //The schema has three fields: movie, slot, and seats. The movie and slot fields are of type String with a default value of an empty string.
    movie: { type: String,  default:"" },
    slot: { type: String, default:"" },
    seats: {
        A1: { type: Number, default:0 },
        A2: { type: Number, default:0 },
        A3: { type: Number, default:0 },
        A4: { type: Number, default:0 },
        D1: { type: Number, default:0 },
        D2: { type: Number, default:0 }
    }                                     //The seats field is an object with six sub-fields: A1, A2, A3, A4, D1, and D2. Each sub-field is of type Number with a default value of zero.
}, { timestamps: true })    //The { timestamps: true } option tells Mongoose to automatically add createdAt and updatedAt fields to the schema.

// Registering the schema with mongoose model.
module.exports = mongoose.model('bookmovieticket', bookMovieSchema);

//the schema is registered as a Mongoose model called 'bookmovieticket' and exported using module.exports. This model can then be used to interact with the bookmovieticket collection in the database.
