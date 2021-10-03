const express = require("express");
const Movie = require("../models/Movie");
const router = new express.Router();

//Commenting as creation cannot be done by user
// Create a movie
// router.post("/movies", async (req, res) => {
//     const newMovie = new Movie(req.body);
//     try {
//         await newMovie.save();
//         res.status(201).send(newMovie);
//     } catch (e) {
//         console.log(e);
//         res.status(400).send(e);
//     }
// });

// Get all movies
router.get("/movies", async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200);
        res.render("movies", { movies: movies });
    } catch (e) {
        res.status(400).send(e);
    }
});

// Get movie by id
router.get("/movies/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const movie = await Movie.findById(_id);
        if (!movie) return res.sendStatus(404);
        return res.send(movie);
    } catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;
