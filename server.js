// Declare our core Dependencies
// =============================================================
require("dotenv").config();
const app = require('./server-config')
const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://localhost/mj_doctor_db";

// define our port both here and in production
const port = process.env.PORT || 8000;

// connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log("There is a problem with the connection" + err)
    } else {
        console.log("Mongoose connection is good.")
    }
});

// Start the server
app.listen(port, () => console.log(`Listening on port ${port}`));
