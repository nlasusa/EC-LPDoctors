var mongojs = require("mongojs")
const db = require("../models")
const Doctor = require("../models/Doctor")

// any DB functions will be written in this object here, and sent to the api routes to be used
const controller = {
    //=====================================================================================================
    //
    //  This function creates a new doctor in the database using the db function we wrote to make sure the
    //    password is encrypted. The function takes in an object which will be a full doctor DB object, 
    //    including the following fields: 
    // 
    //      "firstName" : 
    //      "lastName" : 
    //      "officePhone" : 
    //      "emailAddress" : 
    //      "websiteURL" : 
    //      "streetAddress" : 
    //      "streetAddress2" : 
    //      "city" : 
    //      "state" : 
    //      "zip" : 
    //      "activeMember" : 
    //      "membershipDate" :
    //      "paymentinfo" : 
    //      "recurringPayment" :  
    //      "password" :
    //      "picture" : 
    // 
    //    the newly-created object will be returned to the front-end with a success message if the 
    //    object is created in the database, and with an error message if it is not. 
    //
    //=====================================================================================================
    createNewDoctor : (doctorObj, callback) => {
        var newDoctor = new Doctor(doctorObj)
        Doctor.createNew(newDoctor, (err, theDoctor) => {
            if(err) {
                callback({
                    status: "Error",
                    body: err
                })
            }
            else {
                callback({
                    status: "Success",
                    body : theDoctor
                })
            }
        })
    },

    //=====================================================================================================
    //
    //  This function takes in an id from the front-end and looks up the id in the database, and returns 
    //     its findings to the callback function. This only searches by ID, so is useful for clicks on 
    //     a specific doctor to get more info - like from the doctor listing - where the ID can be 
    //     provided within the button or link. 
    //
    //=====================================================================================================
    findDoctor : (id, callback) => {
        db.Doctor.findOne({_id: mongojs.ObjectId(id)})
        .then(response => {
            callback(response)
        })
    },

    fetchAllDoctors : callback => {
        db.Doctor.find({})
        .then(response => {
            callback(response)
        })
    }
}

module.exports = controller