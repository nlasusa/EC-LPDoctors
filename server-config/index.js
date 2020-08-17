// SET EXPRESS ENVIRONMENT
const express = require("express");
const app = express();

// imports session, logger, and passport to the server
const middleware = require("../middleware");

// Set variables for our express environment
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ADD WINSTON LOGGER MIDDLEWARE TO SERVER
app.use(middleware.logger);

// Serve static files from the "public" directory
app.use(express.static('public'))

// We need to use sessions to keep track of our user's login status
// app.use(
//   middleware.session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// );
// app.use(middleware.passport.initialize());
// app.use(middleware.passport.session());

// include all of our routes from the routes module to our express environment
require('../routes/html')(app);
require('../routes/api')(app);


// export our express environment back to the server
module.exports = app;