const express = require("express");
const router = new express.Router();
const passport = require("passport");
const User = require("../models/User");

router.get("/register", async (req, res) => {
    res.render("register");
});

router.post("/register", async (req, res) => {
    console.log(req.body);
    User.register(
        { username: req.body.username },
        req.body.password,
        function (err, newUser) {
            if (err) {
                console.log(err);
                res.status(409);
                //res.redirect("/register");
                res.render("login", { error: "User already registered" });
            } else {
                //Use local strategy to authenticate
                passport.authenticate("local")(req, res, function () {
                    res.redirect("/home");
                });
                //res.render("secrets");
            }
        }
    );
});

router.get("/login", async (req, res) => {
    res.render("login", { error: "" });
});

router.post("/login", async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    });

    req.login(user, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/home");
        }
    });
});

router.get("/logout", async (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = router;
