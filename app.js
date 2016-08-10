var express = require('express');
var app = express();
var routes = require('./routes/index');
app.get("/insert",routes.insert);
app.get("/find",routes.find);
// app.get('/find',routes.find);
app.listen(3000);

