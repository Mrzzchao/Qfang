var express = require("express");
var fs = require("fs");
var OldHouseModel = require("../models/oldHouse.js");
var router = express.Router();
var formidable = require("formidable"); //载入 formidable
var files = [];


router.get('/oldHouse', function(req, res) {
	OldHouseModel.fetch(function(err, result) {
		if (err) console.log(err);
		res.json(result);
	});
})
router.post('/oldHouse', function(req, res) {
	OldHouseModel.fetchByType(req.body.type, function(err, result) {
		if (err) console.log(err);
		res.json(result);
	});
})
router.post('/oldHouse/upload/msg', function(req, res) {
	//res.send("上传成功1");
	console.log(req.param);
	oldHouseMsgReq(req, res);
})
router.post('/oldHouse/upload/img', function(req, res) {
	oldHouseImgReq(req, res);
	// res.send("上传成功2");
	// console.log(req.body);
})
router.post('/saleRecord', function(req, res) {
	OldHouseModel.fetchRecord(req.body.userId, function(err, result) {
		if (err) console.log(err);
		res.json(result);
	});
})
router.post('/houseSave', function(req, res) {
	OldHouseModel.fetchSave(req.body.userId, function(err, result) {
		if (err) console.log(err);
		res.json(result);
	});
})
router.post('/houseSave/add', function(req, res) {
	OldHouseModel.update({oldHouseId:req.body.houseId},{$addToSet:{saveUserId: req.body.userId}},function(err){
		if (err) return console.error(err);
		res.send({result:"已收藏"});
	});
})
router.post('/houseSave/removeOne', function(req, res) {
	OldHouseModel.update({oldHouseId:req.body.houseId}, {$pull: {saveUserId: req.body.userId}},function(err, doc) {
		if (err) return console.error(err);
		res.send({result:"已删除"});
	});
})
router.post('/houseSave/removeAll', function(req, res) {
	OldHouseModel.find({"saveUserId": req.body.userId}, function(err, docs) {
		if(err) {
			console.log(err);
			return;
		}
		if(docs) {
			docs.forEach(function(elem) {
				var index = elem._doc.saveUserId.indexOf(req.body.userId);
				elem._doc.saveUserId.splice(index, 1);
				elem.save();
			})
			console.log("delete success!");
			return;
		}
	})
	// OldHouseModel.update({oldHouseId:req.body.houseId}, {$pull: {saveUserId: req.body.userId}},{multi: true}, function(err, doc) {
	// 	if (err) return console.error(err);
	// 	res.send({result:"已删除"});
	// });
	res.send({result:"已删除全部"});
})

function oldHouseMsgReq(req, res) {
	var data = {
		showKeyword: req.body.showKeyword,
		houseAbout: req.body.houseAbout,
		houseAddress: req.body.houseAdress,
		owner: req.body.owner,
		otherMsg: req.body.otherMsg
	};
	dbSave(data, res);
}

function dbSave(data, res) {
	var OldHouse = new OldHouseModel(data);
	OldHouse.save(function(err, oldHouseMsg) {
		if (err) return console.error(err);
		else res.send(oldHouseMsg._doc.oldHouseId + "");
	});

}

function dbUpdate(id, data) {
	OldHouseModel.update({oldHouseId:id},{$addToSet:{imgUrls: data}},function(err){
		if (err) return console.error(err);
	});
}

function oldHouseImgReq(req, res) {
	var form = new formidable.IncomingForm();   //创建上传表单
	var toDir = "dist/assets/images/oldHouse/";
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
	  dbUpdate(fields.id, fileName);
	  console.log(newPath);
	  fs.renameSync(files.file_data.path, newPath);  //重命名
	  res.end();
  });

	res.locals.success = '上传成功';
}

function saleRecordReq(req, res) {

}
module.exports = router;
