var express = require('express');
let bodyParser = require("body-parser");

var app = express();
var routes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/insert",routes.insert);
app.get("/find",routes.find);
// app.get('/find',routes.find);
app.listen(3000);

