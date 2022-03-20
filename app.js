const express = require('express');
const path = require("path");
const app = express();
const User = require('./src/models/users');
// import dotev from "dotenv";
// const dotevn=require("./.env");
// dotevn.config()
// require("dotenv").config()
// const userRouters = require('./route/user')
const userRouters = require('./route/user');
const hbs = require('hbs');

require('./src/db/conn_mongodb');

const port = 3001;

const staticpath = path.join(__dirname, "./public");
const templatespath = path.join(__dirname, "templates/views");
const partialspath = path.join(__dirname, "templates/partials");

const { Mongoose } = require('mongoose');


app.use(express.urlencoded({ extended: false })); //to use html page element access
app.use(express.static(staticpath));
app.use(userRouters);
app.set("view engine", "hbs");
app.set("views", templatespath);
hbs.registerPartials(partialspath);


//server start
app.listen( process.env.PORT ||port, () => {
    console.log(`server is running at port no ${port}`);

})