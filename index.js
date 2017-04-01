var express = require("express");
var path = require('path');
var app = express();


app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/about', function(req, res) {
    res.send("This is about page !");
});

// /book/19/JohnDoe/Something
app.get('/book/:century/:author/:bookName', function(req, res) {
    var reqData = req.params;
    res.send("You've viewing book '" + reqData.bookName + "' written " + reqData.author + " in " + reqData.century + " century ");
})

app.listen(3000, function() {
    console.log("Server started");
});