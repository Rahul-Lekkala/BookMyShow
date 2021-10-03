require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");

// Routes
const comingSoonRouter = require("./routes/comingsoon");
const movieRouter = require("./routes/movie");
const theatreRouter = require("./routes/theatre");
const showRouter = require("./routes/show");
const bookingRouter = require("./routes/ticket");
const homeRouter = require("./routes/auth");
const loginRouter = require("./routes/home");
const registerRouter = require("./routes/register");

const app = express();

const port = process.env.PORT || 3001;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(
    session({
        secret: process.env.SESSION_SECRET, // To use this, create a variable named SESSION_SECRET in .env and assign the secret
        resave: false,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Use cors to allow cross-origin-requests
app.use(cors());

app.use(express.json());

//setup routes
app.use(movieRouter);
app.use(comingSoonRouter);
app.use(theatreRouter);
app.use(showRouter);
app.use(bookingRouter);
app.use(homeRouter);
app.use(loginRouter);
app.use(registerRouter);

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        app.listen(port, () => console.log(`app is running in PORT: ${port}`));
    }
);
