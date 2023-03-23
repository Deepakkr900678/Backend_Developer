const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/backend_developer');
const User = require("./models/users")
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("OK")
})

//READ ALL THE USERS

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: "Success",
            data: users
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: "Invalid Request"
        })
    }
})

//GET PARAMETERS

app.get("/users/:id", async (req, res) => {
    try {
        const users = await User.find({_id: req.params.id});
        res.status(200).json({
            status: "Success",
            data: users
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: "Invalid Request"
        })
    }
})

//POST PARAMETERS

app.post("/users", async (req, res) => {
    try {
        const users = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            mobile_number: req.body.mobile_number
        });
        res.status(200).json({
            status: "Success",
            users
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: "Invalid Request"
        })
    }
})

//UPDATECONTACT ONE USERS

app.put("/users/:id", async (req, res) => {

    try {
        const users = await User.updateOne({ _id: req.params.id }, req.body);
        res.status(200).json({
            status: "Success",
            users
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: "Invalid Request"
        })
    }
})

//DELETECONTACT ONE USERS

app.delete("/users/:id", async (req, res) => {

    try {
        const users = await User.deleteOne({ _id: req.params.id });
        res.status(200).json({
            status: "Success",
            users
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: "Invalid Request"
        })
    }
})

app.get("*", (req, res) => {
    res.status(400).json({
        status: "Failed",
        message: "Invalid Request"
    })
})

app.listen(3500, () => console.log("Server is up at 3500 port"))