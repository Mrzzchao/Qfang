var express = require("express");
// var UserModel = require("../models/user.js");
var router = express.Router();


router.post('/oldHouse/upload', function(req, res) {
        res.send("上传成功");
    })


module.exports = router;
