const express = require("express");
const Show = require("../models/Show");
const Theatre = require("../models/Theatre");
const router = new express.Router();

// Create a show
//Commenting as creation cannot be done by user
// router.post("/shows", async (req, res) => {
//     const show = new Show(req.body);
//     try {
//         await show.save();
//         res.status(201).send(show);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

// Get all shows
router.get("/shows", async (req, res) => {
    try {
        const shows = await Show.find({});
        res.send(shows);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Get show by id
router.get("/shows/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const show = await Show.findById(_id);
        return !show ? res.sendStatus(404) : res.send(show);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Get all shows of a movie
router.get("/shows/movies/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const shows = await Show.find({});
        let theatres = new Map();
        let movieName = "No shows available";
        shows.forEach((show) => {
            //console.log(show);
            if (show.movieId == _id) {
                movieName = show.movieName;
                if (theatres.has(show.theaterName)) {
                    //console.log(theatres.get(theatre.name));
                    theatres.get(show.theaterName).push(show);
                } else {
                    theatres.set(show.theaterName, [show]);
                }
                //console.log(theatres);
            }
        });

        res.status(200);
        res.render("shows", { theatres: theatres, movieName: movieName });
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;
