//=====================================================================================================
//
// API ROUTES 
// - These are routes that will hit our database only, and not return any html, just JSON data. 
//   
//=====================================================================================================

// bring in our middleware packages
const middleware = require("../middleware")

// bring in our DB functions
const API = require("../controller")

module.exports = app => {
//=====================================================================================================
//
//  POST route to add a doctor to the database. **Only** doctor information  should be in req.body, 
//    response will include a status message and a body. If the status message is error, the body 
//    will contain the error message. If the status message is success, the body will contain 
//    the new record. 
//
//=====================================================================================================
    app.post("/api/doctors/add", (req,res) => {
        API.createNewDoctor(req.body, response => {
            res.json(response)
        })
    })

//=====================================================================================================
//
//  POST route to find a doctor in the database using the mongo ID. This is best used when we are 
//    providing the id, such as a click to learn more, or for when a doctor logs into their portal. 
//
//=====================================================================================================
    app.post("/api/doctors/findone", (req,res) => {
        API.findDoctor(req.body.id, foundObj => {
            res.json(foundObj)
        })
    })



//=====================================================================================================
//
//  GET route to fetch a full list of the doctors from the database. This will be sent to the front-
//    end to be processed there, the list is not sorted or curated in any way. 
//
//=====================================================================================================
    app.get("/api/doctors/getlist", (req,res) => {
        console.log("Fetch all doctor listings. ")
        API.fetchAllDoctors(response => {
            res.json(response)
        })
    })

}