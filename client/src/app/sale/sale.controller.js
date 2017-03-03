(function() {
	'use strict';

	angular
		.module('client')
		.controller('SaleController', SaleController);


	/** @ngInject */
	function SaleController($scope, $location, $http, $interval, $state, $timeout, pattern, user, extend, oldHouse) {
		var status = user.getStatus();
		if(status == 0) {
			$state.go("home");
		}
		$scope.formData = new FormData();
		$scope.oldHouseMsg = oldHouse.getData();
		initAddressSelector($scope);
		initFileInput("input-id", $scope, oldHouse);
		initBootSelector($scope);
		initDropdown($scope);
		var self = this;
		var strArr = $location.absUrl().split("");
		$scope.pattern = pattern;
		// $timeout(function() {
		// 	setDropdownValue($scope);
		// }, 1000);
		$scope.step = {
			id: parseInt(strArr[strArr.length - 1]),
			btnName: "下一步"
		}
		$scope.style = {
			bgColor: "gray",
			isExist: true,
			iconPos: "icon-pos2",
			iconW: "w-185",
			menuItem: "menu-item3"
		}
		if ($scope.step.id == 3) {
			$scope.step.btnName = "提交房源"
		}
		$scope.nextStep = function(stepId) {
			// $scope.stepId = stepId;
			getDropdownValue($scope, function() {
				oldHouse.setData();
				$state.go("sale.step" + stepId);
			});
		}
		$scope.backStep = function(stepId) {
			$state.go("sale.step" + stepId);
		}
		$scope.uploadImg = function() {
			$("#input-id").fileinput("upload");
			$scope.nextStep(4);
		}
		$scope.uploadMsg = function() {
			// $scope.nextStep(3);
			uploadMsgRequest($scope, $http, extend);
		}
		$scope.step2 = {
			title: getStep2Title($scope.oldHouseMsg)
		};
		function uploadMsgRequest() {
			$scope.toUrl = "sale.step3";
			$scope.msg = "";
			var baseUrl = '/oldHouse';
			(function() {
				var tmp = {};
				var dataStr = '';
				extend(tmp, $scope.oldHouseMsg);
				dataStr = $.param(tmp);
				$http.post(baseUrl + '/upload/msg', dataStr, {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).success(function(data) {
					if (data.err) {
						$scope.msg = data.err;
						console.log(data);
						$('#mymodal').modal('show');

					} else {
						oldHouse.setId(data);
						successUploadMsg();
					}

				}).error(function(data) {
					$scope.msg = '服务器错误,不能提交';
					$('#mymodal').modal('show');
				});
			})();
		}
		function successUploadMsg() {
			var count = 3;
			$scope.toUrl = "sale.step3";
			$scope.msg = '文本信息上传成功, ' + 　count + '秒后自动跳转下一步骤';
			$scope.toShow = true;
			$('#mymodal').modal('show');
			$scope.timer = $interval(function() {
				$scope.msg = '文本信息上传成功, ' + 　count + '秒后自动跳转下一步骤';
				if (count === 0) {
					$interval.cancel($scope.timer);

				}
				count--;
				if (count === -1) {
					$timeout(function() {
						$state.go('sale.step3');
					}, 1000);
					$('#mymodal').modal('hide');
				}
			}, 1000);
		}
	}


	function getStep2Title(oldHouseMsg) {
		var areaName = oldHouseMsg.houseAdress.community;
		var buildingBlock = oldHouseMsg.houseAdress.buildingBlock;
		var roomN = oldHouseMsg.houseAdress.roomN;

		return areaName + " " + buildingBlock + "栋" + roomN;
	}

	function initAddressSelector($scope) {
		// $('.selectpicker').selectpicker({
		// 	'selectedText': 'cat'
		// });
		$scope.p = '广东';
		$scope.c = '广州';
		$scope.a = '天河区';
		$scope.d = '五山路';
	}

	function initBootSelector($scope) {
		$scope.specialLists = [
			"地铁房",
			"红本在手",
			"住家三房",
			"刚需小户",
			"不限购",
			"优选大房",
			"急售",
			"南北通透",
			"随时看房",
			"满两年",
			"复式"
		];
	}

	function initFileInput(ctrlName, $scope, oldHouse) {
		var formData = new FormData();
		var control = $('#' + ctrlName);
		var id = oldHouse.getId();
		control.fileinput({
			language: 'zh', //设置语言
			uploadUrl: "oldHouse/upload/img?id=" + id, //上传的地址
			browseLabel: '图片多选',
			allowedFileExtensions: ['jpg', 'png'], //接收的文件后缀
			allowedFileTypes: ['image'], // 限制文件类型为图片
			allowedPreviewTypes: ['image'], // 允许预览的文件类型
			// initialPreviewShowDelete: true,   // 这一条是个完全搞不懂的bug
			maxFileCount: 16,  // 限制最多3张图片
		    maxFileSize: 2048, // 限制图片大小，最大1024KB
			initialCaption: '可以选择最多16张图片，格式为png或者jpg，大小不超过2M', // 初始化说明框框，比如该项目上默认显示：可以选择最多3张图片，格式为png或者jpg，大小不超过1M
			uploadAsync: true, //默认异步上传
			showUpload: false, //是否显示上传按钮
			showRemove: true, //显示移除按钮
			showPreview: true, //是否显示预览
			showCaption: false, //是否显示标题
			browseClass: "btn btn-primary", //按钮样式
			mainClass: "fileInputMain",
			previewClass: "fileInputPreview",
			showUploadedThumbs: false,
			initialPreviewShowDelete:true,
			uploadExtraData: {id: id},
		// 	layoutTemplates: {
		//       main1: '{preview}\n' +
		//       '<div class="input-group {class}">\n' +
		//       ' <div class="input-group-btn">\n' +
		//       ' {browse}\n' +
		//       ' {remove}\n' +
		//       ' </div>\n' +
		//       ' {caption}\n' +
		//       '</div>',
		//       footer: '<div class="file-thumbnail-footer">\n' +
		//       ' <div class="file-caption-name">{caption}{size}</div>\n' +
		//       '</div>'
		//   },
			// dropZoneEnabled: true,//是否显示拖拽区域
			// minImageWidth: 50, //图片的最小宽度
			// minImageHeight: 50,//图片的最小高度
			// maxImageWidth: 1000,//图片的最大宽度
			// maxImageHeight: 1000,//图片的最大高度
			// maxFileSize: 0,//单位为kb，如果为0表示不限制文件大小
			// minFileCount: 0,
			// maxFileCount: 10, //表示允许同时上传的最大文件个数
			enctype: 'multipart/form-data',
			validateInitialCount: true,
			previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
			msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",

		}).on('filepreupload', function(event, data, previewId, index) { //上传中
			var form = data.form,
				files = data.files,
				extra = data.extra,
				response = data.response,
				reader = data.reader;
				formData.append('data', data);
				console.log("111111");
				console.log(formData);
		}).on("fileuploaded", function(event, data, previewId, index) { //一个文件上传成功
			console.log("fileloaded");
		}).on('fileerror', function(event, data, msg) { //一个文件上传失败

			formData.append('data', data);
			console.log("111111");
			console.log(formData);
		})

	}

	function initDropdown($scope) {
		$scope.dropdown1 = {
			id: 1,
			word: "室",
			lists: [1, 2, 3, 4, 5, 6, 7, 8]
		};
		$scope.dropdown2 = {
			id: 2,
			word: "厅",
			lists: [0, 1, 2, 3, 4, 5, 6, 7, 8]
		};
		$scope.dropdown3 = {
			id: 3,
			word: "卫",
			lists: [0, 1, 2, 3, 4, 5, 6, 7, 8]
		};
		$scope.dropdown4 = {
			id: 4,
			word: "栋",
			lists: ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4", "E", "F", "G", "H"]
		};
		$scope.dropdown5 = {
			id: 5,
			word: "",
			lists: ["朝北", "朝南", "朝东", "朝西", "朝东北", "朝东南", "朝西北", "朝西南"]
		};
		$scope.dropdown6 = {
			id: 6,
			word: "",
			lists: ["普通装修", "精装修", "豪华装修"]
		};
		$scope.dropdown7 = {
			id: 7,
			word: "",
			lists: ["低层", "中层", "高层"]
		};
		$scope.dropdown8 = {
			id: 8,
			word: "",
			lists: ["随时预约", "周末", "电话联系"]
		};
	}

	function getDropdownValue($scope, next) {
		var tmp = "";
		for (var i = 0; i < 9; i++) {
			tmp = $("#dropdown" + i).val();
			if (tmp) {
				switch (i) {
					case 1:
						$scope.oldHouseMsg.houseAbout.roomC.bedR = tmp;
						break;
					case 2:
						$scope.oldHouseMsg.houseAbout.roomC.livingR = tmp;
						break;
					case 3:
						$scope.oldHouseMsg.houseAbout.roomC.restR = tmp;
						break;
					case 4:
						$scope.oldHouseMsg.houseAdress.buildingBlock = tmp;
						break;
					case 5:
						$scope.oldHouseMsg.houseAbout.direction = tmp;
						break;
					case 6:
						$scope.oldHouseMsg.houseAbout.decoration = tmp;
						break;
					case 7:
						$scope.oldHouseMsg.houseAdress.floors.heightType = tmp;
						break;
					case 8:
						$scope.oldHouseMsg.otherMsg.lookTime = tmp;
						break;
					default:

				}
			}
		}

		next();
	}

})();
