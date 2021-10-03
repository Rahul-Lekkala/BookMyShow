const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    cast: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    released: {
        type: Boolean,
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
