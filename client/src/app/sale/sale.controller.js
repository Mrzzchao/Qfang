(function() {
	'use strict';

	angular
		.module('client')
		.controller('SaleController', SaleController);


	/** @ngInject */
	function SaleController($scope, $state, $location, $timeout, pattern, oldHouse) {

		initAddressSelector($scope);
		initFileInput("input-id");
		initBootSelector($scope);
		initDropdown($scope);
		$("#dropdown7").val("11111111111");
		var self = this;
		var strArr = $location.absUrl().split("");
		$scope.pattern = pattern;
		$scope.oldHouseMsg = oldHouse.getData();
		$timeout(function() {
			setDropdownValue($scope);
		}, 1000);
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
		$scope.step2 = {
			title: "汇景新城,汇景新城(后天河北) A1栋702"
		};
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

	function initFileInput(ctrlName) {
		var control = $('#' + ctrlName);
		control.fileinput({
			language: 'zh', //设置语言
			uploadUrl: "upload/insert", //上传的地址
			allowedFileExtensions: ['jpg', 'gif', 'png'], //接收的文件后缀
			uploadAsync: true, //默认异步上传
			showUpload: true, //是否显示上传按钮
			showRemove: true, //显示移除按钮
			showPreview: true, //是否显示预览
			showCaption: false, //是否显示标题
			browseClass: "btn btn-primary", //按钮样式
			mainClass: "fileInputMain",
			previewClass: "fileInputPreview",
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
		}).on("fileuploaded", function(event, data, previewId, index) { //一个文件上传成功

		}).on('fileerror', function(event, data, msg) { //一个文件上传失败

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

	function setDropdownValue($scope) {

		var tmp = "";
		// console.log($scope.oldHouseMsg);
		for (var i = 1; i < 9; i++) {
			// console.log(i);
			switch (i) {
				case 1:
					$("#dropdown" + i).val($scope.oldHouseMsg.houseAbout.roomC.bedR);
					break;
				case 2:
					$("#dropdown" + i).val($scope.oldHouseMsg.houseAbout.roomC.livingR);
					break;
				case 3:
					$("#dropdown" + i).val($scope.oldHouseMsg.houseAbout.roomC.restR);
					break;
				case 4:
					$("#dropdown" + i).val($scope.oldHouseMsg.houseAdress.buildingBlock);
					break;
				case 5:
					$("#dropdown" + i).val($scope.oldHouseMsg.houseAbout.direction);
					break;
				case 6:
					$("#dropdown" + i).val($scope.oldHouseMsg.houseAbout.decoration);
					break;
				case 7:
					$("#dropdown" + i).val($scope.oldHouseMsg.houseAdress.floors.heightType);
					break;
				case 8:
					$("#dropdown" + i).val($scope.oldHouseMsg.otherMsg.lookTime);
					break;
				default:

			}
			// console.log($("#dropdown" + i).val());

		}
	}

})();
