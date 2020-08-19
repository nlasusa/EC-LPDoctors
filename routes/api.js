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
    
//=====================================================================================================
//  POST route to add a doctor to the database. **Only** doctor information  should be in req.body, 
//    response will include a status message and a body. If the status message is error, the body 
//    will contain the error message. If the status message is success, the body will contain 
//    the new record. 
//=====================================================================================================
    app.post("/api/doctors/add", (req,res) => {
        API.createNewDoctor(req.body, response => {
            res.json(response)
        })
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