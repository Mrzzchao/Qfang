var express = require("express");
var UserModel = require("../models/user.js");
var router = express.Router();


router.get('/user', function(req, res) {
	UserModel.fetch(function(err, result) {
		if (err) console.log(err);
		res.json(result);
	});
})

router.post('/user/register', function(req, res) {
	registerReq(req, res);
});

router.post('/user/login', function(req, res) {
	loginReq(req, res);
});

// 注册请求处理
function registerReq(req, res) {
	userIsExist(req, res, function() {
		console.log("5---");
		console.log(UserModel.isExistFlag);
		if (!UserModel.isExistFlag)
			dbSave(req.body);
	}, true);
}

function userIsExist(req, res, next, flag) {
	var username = req.body.username;
	var password = req.body.password;
	console.log("6----");
	console.log(username);
	var result = "";
	UserModel.isExist(username, function(err) {
		if (err) {
			console.log(err);
			return;
		}
		var isExist = UserModel.isExistFlag;

		if (isExist) {
			result = {
				err: {
					name: "用户已存在"
				}
			};
			if (flag)
				res.send(result);
		} else {
			result = "注册成功";
			res.send(result);
		}
		var i_flag = isExist ^ flag;
		if (i_flag) {
			next();
		}
		console.log("4----");
		console.log(isExist);
	});

}

function dbSave(user) {
	var User = new UserModel({
		username: user.username,
		password: user.password
	});
	User.save(function(err, user) {
		if (err) return console.error(err);
	});

}

// 登录请求处理
function loginReq(req, res) {
	userIsExist(req, res, userIsMatch, false);

	function userIsMatch() {
		var result = "";
		UserModel.isMatch(req.body, function(err) {
			if (err) {
				console.log(err);
				return;
			}
			if (UserModel.isMatchFlag) {
				result = "登录成功";
			} else {
				result = {
					err: "密码错误"
				}
			}
			res.send(result);
		})
	}
}

module.exports = router;
