# BookMyShow
A simplified version of a movie booking website (like BookMyShow.com)
<p align="center">
MongoDB, Expressjs, Nodejs, Bootstrap, Vanilla JS
</p>

# Features!

Users can:
- Signup / Login / Logout on the website using an email ID and password
- See the names of all the current movies along with the theatres and timings
- Select and book a specific movie and view all the theaters and showtimes in which the movie is playing
- Book a movie for a specific theater and show time, with a specific number of seats
- Generate an order confirmation with a booking code (No payment)

### Tech
* [MongoDB](https://www.mongodb.com/) - A document-oriented, No-SQL database.
* [NodeJS](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine
* [ExpressJS](https://expressjs.com/) - A back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
* [BootStrap](https://getbootstrap.com/) - A free and open-source CSS framework directed at responsive, mobile-first front-end web development.

### Installation

Install [Node.js](https://nodejs.org/)  to run.

Set environment variables 

```sh
$ Create a .env file 
Create a mongodb database and add the URI in .env file(MONGODB_URI)
Add a session secret(SESSION_SECRET)
```

Install the dependencies

```sh
$ git clone https://github.com/Rahul-Lekkala/BookMyShow.git
$ cd BookMyShow
$ npm install
```

Start the application
```sh
$ nodemon app.js
```

Go to localhost:3001/ to view the application

Project deployed at: https://bookmovieonline.herokuapp.com/
