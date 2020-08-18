// bring in our middleware packages
const middleware = require("../middleware")

// bring in our DB functions
const API = require("../controller")

//bringing in some test data...
const dummyData = require("../data.json")

//=====================================================================================================
// API ROUTES
//
//   These are routes that will hit our database only, and not return any html, just JSON data. 
//=====================================================================================================
module.exports = app => {
    
    app.post("/api/doctors/add", (req,res) => {
        // just putting this here for initial testing
        console.log("Add a doctor")
        console.log(req.body)
        res.json(req.body)
    })

    app.post("/api/doctors/findone", (req,res) => {
        console.log("Find a single doctor listing")
        console.log(req.body)
        res.json(dummyData[req.body.id - 1])
    })

    app.get("/api/doctors/getlist", (req,res) => {
        console.log("Fetch all doctor listings. ")
        res.json(dummyData)
    })

}