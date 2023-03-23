const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, unique: true },
    email: { type: String, unique: true },
    mobile_number: { type: String, unique: true }
}, { timestamps: true })

const userModel = mongoose.model("User", userSchema)
module.exports = userModel