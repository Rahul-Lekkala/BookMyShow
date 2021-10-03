const express = require("express");
const Movie = require("../models/Movie");
const router = new express.Router();

// Get all movies which are not released
router.get("/coming-soon", async (req, res) => {
    try {
        const movies = await Movie.find({ released: false });
        //res.send(movies);
        console.log(movies);
        res.status(200);
        res.render("comingsoon", { movies: movies });
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;
