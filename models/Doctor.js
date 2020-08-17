const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcryptjs");

var DoctorSchema = new Schema ({

    firstname: {
        type: String,
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    username: {
        type: String,
        required: "Username is required."
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required."
    },
    phonenumber: {
        type: String,
        trim: true
    },
    website: {
        type: String,
        trim: true
    },
    address1: {
        type: String,
        trim: true
    },
    address2: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    zip: {
        type: Number,
        trim: true
    },
    activemember: {
        type: Boolean
    },
    recurring: {
        type: Boolean
    },
    membershipdate: {
        type: Date,
    },
    paymentinfo: {
        type: String,
        trim: true
    },

})

const Doctor = module.exports = mongoose.model("Doctor", DoctorSchema)

module.exports.getDoctorById = function(id, callback){
    Doctor.findById(id, callback);
  }
