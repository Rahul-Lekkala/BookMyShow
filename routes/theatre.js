const express = require("express");
const Theatre = require("../models/Theatre");
const router = new express.Router();

// Create a theatre
//Commenting as creation cannot be done by user
// router.post("/theatres", async (req, res) => {
//     const theatre = new Theatre(req.body);
//     try {
//         await theatre.save();
//         res.status(201).send(theatre);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

// Get all theatres
router.get("/theatres", async (req, res) => {
    try {
        const theatres = await Theatre.find({});
        res.send(theatres);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Get theatre by id
router.get("/theatres/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const theatre = await Theatre.findById(_id);
        if (!theatre) return res.sendStatus(404);
        return res.send(theatre);
    } catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;
