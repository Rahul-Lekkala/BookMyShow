const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const showSchema = new Schema({
    startAt: {
        type: String,
        required: true,
    },
    ticketPrice: {
        type: Number,
        required: true,
    },
    seatsAvailable: {
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
    theaterName: {
        type: String,
    },
    movieName: {
        type: String,
    },
});

const Show = mongoose.model("Show", showSchema);

module.exports = Show;
