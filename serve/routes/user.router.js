var express = require("express");
var UserModel = require("../models/user.js");
var formidable = require("formidable"); //载入 formidable
var fs = require("fs");
var files = [];
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

router.post('/user/password', function(req, res) {
	updatePassword(req, res);
});
router.post('/user/msg', function(req, res) {
	userImgUpload(req, res);
});

function updatePassword(req, res) {
	UserModel.isMatch(req.body, function(err) {
		if (err) {
			console.log(err);
			return;
		}
		if (UserModel.isMatchFlag) {
			dbUpdatePassword(req.body.username, req.body.newPassword, res);
		} else {
			result = {
				err: "密码错误"
			}
			res.send(result);
		}
	});
}

function dbUpdatePassword(username, newPassword, res) {
	UserModel.update({"username": username}, {$set: {"password": newPassword}},function(err, doc) {
		if (err) return console.error(err);
		res.send({result:"已修改"});
	});
}

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
				result = UserModel.user;
			} else {
				result = {
					err: "密码错误"
				}
			}
			res.send(result);
		})
	}
}

function userImgUpload(req, res) {
	var form = new formidable.IncomingForm();   //创建上传表单
	var toDir = "dist/assets/images/userManage/";
	form.encoding = 'utf-8';		//设置编辑
	form.uploadDir = 'tmp/';	 //设置上传目录
	form.keepExtensions = true;	 //保留后缀
	form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小

  form.parse(req, function(err, fields, files) {

	  if (err) {
		  res.locals.error = err;
		  res.end();
		  return;
	  }
	  if(!files.file_data) {
		  res.locals.error = "没有图片上传";
	  	  dbUserMsgUpdate2(fields);
		  res.end();
		  return;

	  }
		  var extName = '';  //后缀名
		  switch (files.file_data.type) {
			  case 'image/pjpeg':
			  extName = 'jpg';
			  break;
			  case 'image/jpeg':
			  extName = 'jpg';
			  break;
			  case 'image/png':
			  extName = 'png';
			  break;
			  case 'image/x-png':
			  extName = 'png';
			  break;
	  }

	  if(extName.length == 0){
			res.locals.error = '只支持png和jpg格式图片';
			res.end();
  		  	return;
	  }

	  var fileName = files.file_data.name;
	  var newPath = toDir + fileName;
	  dbUserMsgUpdate(fields, fileName);
	  console.log(newPath);
	  if(files.file_data)
		  fs.renameSync(files.file_data.path, newPath);  //重命名
	  res.end();
  });

	res.locals.success = '修改成功';
}

function dbUserMsgUpdate(fields, avatar) {
	UserModel.update({"userId": fields.userId}, {$set: {"avatar": avatar, "loveName": fields.loveName}},function(err, doc) {
		if (err) return console.error(err);
	});
}

function dbUserMsgUpdate2(fields) {
	UserModel.update({"userId": fields.userId}, {$set: {"loveName": fields.loveName}},function(err, doc) {
		if (err) return console.error(err);
	});
}

module.exports = router;
