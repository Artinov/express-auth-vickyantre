var express = require("express");
var app = express();

var path = require('path');
var users = require('./users.json');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/about', function(req, res) {
    res.send("This is about page !");
});

app.post('/login', function(req, res) {
    console.log(req.body);

    var authUsers = users.filter(function(user) {
    	return (user.login == req.body.login && user.password == req.body.password);
    });

    if (authUsers.length > 0) {
    	res.send({success: true})
    } else {
    	res.send({sucess: false})
    }

});

app.listen(3000, function() {
    console.log("Server is working on http://localhost:3000/");
});