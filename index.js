const express = require('express'); //import express framework

/*
const fs = require('fs'); //import file system framework
const Datastore = require('nedb'); //import database framework
const fetch = require("node-fetch"); //import fetch function
const schedule = require('node-schedule')
*/


//Server
const app = express(); //Initialise the express object

//start the server listening on port 3000, notify the console
app.listen(3000, () => console.log('listening on port 3000')); 

//Set the static directory to the folder public
//app.use(express.static('public'));

app.use(express.json({limit: '1mb'}));

app.use(express.static('Public'));