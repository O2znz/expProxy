var express= require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = "3010";
app.use(express.static(path.resolve(__dirname, '../client/')));
// app.use('/:listingid', express.static(path.resolve(__dirname, '../client/')));
app.use(bodyParser.json());

app.listen(PORT, () => console.log("Now running on : ", PORT))