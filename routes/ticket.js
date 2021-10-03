const express = require("express");
const Ticket = require("../models/Ticket");
const Show = require("../models/Show");
const Movie = require("../models/Movie");
const Theatre = require("../models/Theatre");
const router = new express.Router();

// Book a ticket for a given show
router.post("/tickets/:id", async (req, res) => {
    if (req.isAuthenticated()) {
        const showId = req.params.id;
        try {
            const show = await Show.findById(showId);
            if (show.seatsAvailable - req.body.numberOfSeats >= 0) {
                const ticket = req.body;
                ticket.userId = req.user._id;
                let totalPrice = req.body.numberOfSeats * req.body.ticketPrice;
                ticket.totalPrice = totalPrice;
                const newTicket = new Ticket(ticket);
                console.log("Booking a ticket = ", newTicket);
                try {
                    await newTicket.save();
                    show.seatsAvailable =
                        show.seatsAvailable - req.body.numberOfSeats;
                    const newShow = new Show(show);
                    await newShow.save();
                    res.status(201);
                    res.render("ticket", {
                        ticket: newTicket,
                    });
                } catch (e) {
                    res.status(400).send(e);
                }
            } else {
                res.status(400);
                res.redirect("/shows/movies/" + show.movieId);
            }
        } catch (e) {
            res.status(400).send(e);
        }
    } else {
        res.redirect(403, "/login");
    }
});

// Get all tickets booked by a user
router.get("/orders", async (req, res) => {
    if (req.isAuthenticated()) {
        const _id = req.user._id;
        try {
            const tickets = await Ticket.find({});
            let order = [];
            tickets.map((ticket) => {
                if (ticket.userId.equals(_id)) {
                    order.push(ticket);
                }
            });

            console.log(order);
            res.render("orders", { tickets: order });
        } catch (e) {
            res.status(400).send(e);
        }
    } else {
        res.redirect(403, "/login");
    }
});

module.exports = router;
