const express = require("express");
const router = new express.Router();

router.get("/", async (req, res) => {
    res.render("auth");
});

module.exports = router;
