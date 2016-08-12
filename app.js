var express = require('express');
let bodyParser = require("body-parser");
var session = require('express-session');

var app = express();
var routes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/', function (req, res) {
    res.sendfile('./index.html');
});

app.get("/signin", function (req, res) {
    res.sendfile('./signin.html');
});
app.post("/signin", routes.insert);

app.get("/login", function (req, res) {
    res.sendfile('./login.html');
});
app.post("/login", routes.login);

app.get('/success', function (req, res) {
    res.send('Welcome');
});
app.listen(3000);

