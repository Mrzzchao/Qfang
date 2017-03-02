var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var UserRouter = require("./routes/user.router.js");
var OldHouseRouter = require("./routes/oldHouse.router.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(UserRouter);
app.use(OldHouseRouter);
app.set('port', process.env.PORT || 3001);
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(app.get("port"), function() {
    console.log("running on port" + app.get("port"));
});
