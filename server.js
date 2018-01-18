var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, '/dist')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
var server = app.listen(process.env.PORT || 5000, function () {
    console.log("Listening on port: ", server.address().port);
})
