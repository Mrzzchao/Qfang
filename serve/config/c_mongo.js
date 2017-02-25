var mongoose = require('mongoose');

var dbName = 'QfangDB';
var connectionString = 'mongodb://localhost:27017/' + dbName;

var db = mongoose.connect(connectionString,  function(err) {
  if (err) {
    console.log('连接失败');
  }else {
    console.log('连接成功');
  }
});
db.connection.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});

db.connection.on("open", function () {
  console.log("数据库连接成功");
});
module.exports = db;
