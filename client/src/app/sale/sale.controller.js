(function() {
	'use strict';

	angular
		.module('client')
		.controller('SaleController', SaleController);


	/** @ngInject */
	function SaleController($scope, $state, $location) {
		initFileInput("input-id");
		var self = this;
		var strArr = $location.absUrl().split("");
		$scope.step = {
			id: parseInt(strArr[strArr.length -1]),
			btnName: "下一步"
		}
		$scope.style = {
			bgColor: "gray",
			isExist: true,
			iconPos: "icon-pos2",
			iconW: "w-185",
			menuItem: "menu-item3"
		}
		if($scope.step.id == 3) {
			$scope.step.btnName = "提交房源"
		}
		$scope.nextStep = function(stepId) {
			// $scope.stepId = stepId;
			$state.go("sale.step" + stepId);
		}

		$scope.step2 = {
			title: "汇景新城,汇景新城(后天河北) A1栋702"
		};
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
	}

	function initFileInput(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh', //设置语言
            uploadUrl: "upload/insert", //上传的地址
            allowedFileExtensions: ['jpg', 'gif', 'png'],//接收的文件后缀
            uploadAsync: true, //默认异步上传
            showUpload: true, //是否显示上传按钮
            showRemove : true, //显示移除按钮
            showPreview : true, //是否显示预览
            showCaption: false,//是否显示标题
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
            validateInitialCount:true,
            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",

        }).on('filepreupload', function(event, data, previewId, index) {     //上传中
            var form = data.form, files = data.files, extra = data.extra,
            response = data.response, reader = data.reader;
        }).on("fileuploaded", function (event, data, previewId, index) {    //一个文件上传成功

        }).on('fileerror', function(event, data, msg) {  //一个文件上传失败


        })
    }

})();
