const express = require("express");
const router = new express.Router();

//If user is authenticated, get home screen
router.get("/home", async (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect("/movies");
    } else {
        res.redirect(403, "/login");
    }
});

module.exports = router;
