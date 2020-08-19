const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

var DoctorSchema = new Schema ({

    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    emailAddress: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required."
    },
    officePhone: {
        type: String,
        trim: true
    },
    website: {
        type: String,
        trim: true
    },
    streetAddress1: {
        type: String,
        trim: true
    },
    streetAddress2: {
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
    activeMember: {
        type: Boolean
    },
    recurringPayment: {
        type: Boolean
    },
    membershipDate: {
        type: Date,
    },
    paymentinfo: {
        type: String,
        trim: true
    },
    picture: {
        type: String,
        trim: true
    },

})

const Doctor = module.exports = mongoose.model("Doctor", DoctorSchema)

module.exports.getDoctorById = (id, callback) => {
    Doctor.findById(id, callback);
}

module.exports.createNew = (doctorObj, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(doctorObj.password, salt, (err, hash) => {
            doctorObj.password = hash;
            console.log(doctorObj)
            try {
                doctorObj.save(callback);
            }
            catch (err) {
               throw (err)
            }
        });
    });
}

module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}