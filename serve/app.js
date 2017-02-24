var connect = require("./config/c_mongo");
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set('port', process.env.PORT || 3001);
app.use(express.static(path.join(__dirname, 'dist')));
console.log(path.basename);

app.get('/', function(req, res) {
  // res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  // console.log(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(app.get("port"), function() {
    console.log("running on port" + app.get("port"));
});
