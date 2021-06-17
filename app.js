const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const  bodyParser = require('body-parser');
const path = require('path');
const route = require("./server/routes/router");
const database = require("./server/database/connection");


const app = express();


dotenv.config({path:"../config.env"});
const PORT = process.env.PORT || 3000;

//Log request

app.use(morgan("tiny"));

// Database connection
database();

// Parse request to body-parser

app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.urlencoded({ extended: false }))

// View Engine

app.set("view engine" , "ejs");


//Load Assets
app.use(express.static('public'));

//Load Router
app.use("/" , require("./server/routes/router"))

app.listen(PORT , () =>{
    console.log(`Server is running at ${PORT}`);
})