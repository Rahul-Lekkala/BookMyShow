const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ticketSchema = new Schema({
    startTime: {
        type: String,
        required: true,
    },
    ticketPrice: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    numberOfSeats: {
        type: Number,
        required: true,
    },
    movieId: {
        type: Schema.Types.ObjectId,
        ref: "Movie",
        required: true,
    },
    theatreId: {
        type: Schema.Types.ObjectId,
        ref: "Theatre",
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    theatreName: {
        type: String,
    },
    movieName: {
        type: String,
    },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
