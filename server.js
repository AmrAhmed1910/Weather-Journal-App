// Setup empty JS object to act as endpoint for all routes
let projectData;

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 4000;
const server = app.listen(4000, createServer);

function createServer() {
  console.log("server is running at port: " + port + ".");
  console.log("server is ready to work.");
}
// set up routes


app.post('/setData', function(req, res) {
  projectData = req.body;
  res.send(projectData);
  console.log(projectData);

})

app.get('/getData', function(req, res) {
  res.send(projectData);
  console.log(projectData);
})