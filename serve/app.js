var db = require("./config/c_mongo");
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var UserModel = require("./models/user.js");
var mongoose = require("mongoose");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set('port', process.env.PORT || 3001);
app.use(express.static(path.join(__dirname, 'dist')));

db.connection.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});

db.connection.on("open", function () {
  console.log("数据库连接成功");
});

app.post('/user/register', function(req, res) {
    requestHandler(req, res);

});

app.listen(app.get("port"), function() {
    console.log("running on port" + app.get("port"));
});


// 请求处理
function requestHandler(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var result = "";
    UserModel.isExist(username, function(err) {
        if(err) {
            console.log(err);
            return;
        }
        var isExist = UserModel.isFlag;
        console.log("3---");
        console.log(isExist);
        if(isExist) {
            result = {
                err: {
                    name: "用户已存在"
                }
            };
            console.log("存在");
        }
        else {
            console.log("不存在");
            result = "注册成功";
            dbSave(req.body);
        }
        res.send(result);
    });
}

function dbSave(user) {
    var User = new UserModel({
        username: user.username,
        password: user.password
    });
    User.save(function (err, user) {
      if (err) return console.error(err);
    });
}
