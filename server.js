const express = require("express");
const app = express();
const promisify = require('util').promisify;
const request = promisify(require('request'));

//Add CORS module
var cors = require('cors')
app.use(cors())

//Add Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Modules Routes Start
const orderRoutes = require("./routes/orders");
app.use("/", orderRoutes)

const configurationRoutes = require("./routes/configurations");
app.use("/", configurationRoutes)
// Modules Routes End

app.listen("3004", function () {
  console.log('Server is running..');
});