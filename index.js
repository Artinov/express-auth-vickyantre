var express = require("express");
var path = require('path');
var app = express();
var users = require('./users.json');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/about', function(req, res) {
    res.send("This is about page !");
});

app.post('/login', function(req, res) {
    console.log(req.body);
    res.send("This is login route");
});

// /book/19/JohnDoe/Something
app.get('/book/:century/:author/:bookName', function(req, res) {
    var reqData = req.params;
    res.send("You've viewing book '" + reqData.bookName + "' written " + reqData.author + " in " + reqData.century + " century ");
})

app.listen(3000, function() {
    console.log("Server started");
});