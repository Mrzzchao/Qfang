(function() {
	'use strict';

	angular
		.module('client')
		.controller('UserManage', UserManage);

	/** @ngInject */
	function UserManage($scope, $state, $location, $timeout, $http, $interval, user, oldHouseArr, oldHouseShow, pattern) {
		initFileInput("input-id");
		var strArr = $location.absUrl().split("");
		var userData = user.getData();
		$scope.pattern = pattern;

		$scope.userMsg = {
			oldPassword: "",
			newPassword: "",
			repeatPassword: "",
			loveName: userData.loveName
		}
		$scope.step = {
			id: parseInt(strArr[strArr.length - 1]),
		}
		$scope.style = {
			bgColor: "gray",
			isExist: false,
			iconPos: "icon-pos2",
			iconW: "w-185",
			menuItem: "menu-item2"
		}

		$scope.userManageMsg = {
			user: userData
		};
		$scope.userManageMsg.loveName = userData.loveName;
		$scope.toOldHouseShow = function(data) {
			console.log("1-1-1-1-1-");
			console.log(data);
			oldHouseShow.setData(data);
			$state.go("oldHouseShow", {}, {
				reload: true
			});

		}
		$scope.toHouseSave = function() {
			$scope.tabsId = 2;
			oldHouseArr.requestSaveData();
		}
		$scope.toHouseRecord = function() {
			$scope.tabsId = 1;
			oldHouseArr.requestRecordData();
		}
		$scope.toUser = function() {
			$scope.tabsId = 3;
			$state.go("userManage.user.set1");
		}
		$scope.toSet = function(id) {
			$state.go("userManage.user.set" + id, {}, {
				reload:true
			});
		}
		var str = $location.absUrl().split(".")[1];
		console.log(str);
		if(str === "save") {
			$scope.tabsId = 1;
		}
		else if(str === "saleRecord") {
			$scope.tabsId = 2;
		}
		$scope.quitt = function() {
			console.log("quit");
			$scope.userMsg = '<span role="presentation" class="dropdown menu-item1 menu-item-login" ng-show="style.isExist"><a ui-sref="user.login" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">登录</a></span> <span class="line" ng-show="style.isExist"></span> <span role="presentation" class="dropdown menu-item1 menu-item-register" ng-show="style.isExist"><a ui-sref="user.register" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">注册</a></span>';
			user.clearUser();
			$state.go("home");
		}

		$scope.oldHouseSaveArr = oldHouseArr.getData2();
		$scope.oldHouseRecordArr = oldHouseArr.getData();
		if($scope.oldHouseSaveArr.length == 0 && str == "save") {
			$(".right-bottom").html("<h1 class='no-record'>未找到收藏记录</h1>");
		}
		if($scope.oldHouseRecordArr.length == 0 && str == "saleRecord") {
			$(".right-bottom").html("<h1 class='no-record'>未找到委托记录</h1>");
		}
		$scope.oldHouseSaveArr.count1 = $scope.oldHouseSaveArr.length;
		$scope.oldHouseRecordArr.count1 = $scope.oldHouseRecordArr.length;
		$scope.saveDeleteAll = function() {
			$(".house-item").hide("slow");
			$timeout(function() {
				$(".right-bottom").html("<h1 class='no-record'>未找到收藏记录</h1>");
				$scope.oldHouseSaveArr = [];

			}, 1000);
			removeAll();
		}
		$scope.saveDeleteOne = function(id) {
			$timeout(function() {
				$("#item" + id).hide("slow");
			}, 500);
			$scope.oldHouseSaveArr.count1--;
			if($scope.oldHouseSaveArr.count1 == 0) {
				$timeout(function() {
					$(".right-bottom").html("<h1 class='no-record'>未找到收藏记录</h1>");
					$scope.oldHouseSaveArr = [];
				}, 1000);
			}
			removeOne(id);
		}

		$scope.saveDeleteAll2 = function() {
			$(".sale-item").hide("slow");
			$timeout(function() {
				$(".right-bottom").html("<h1 class='no-record'>未找到收藏记录</h1>");
				$scope.oldHouseRecordArr = [];

			}, 1000);
			removeAll2();
		}
		$scope.saveDeleteOne2 = function(id) {
			$timeout(function() {
				$("#item" + id).hide("slow");
			}, 500);
			$scope.oldHouseRecordArr.count1--;
			if($scope.oldHouseRecordArr.count1 == 0) {
				$timeout(function() {
					$(".right-bottom").html("<h1 class='no-record'>未找到收藏记录</h1>");
					$scope.oldHouseRecordArr = [];
				}, 1000);
			}
			removeOne2(id);
		}


		function removeOne(id) {
			var userId = user.getUserId();
			var str = $.param({
				houseId: id,
				userId: userId
			});
			$http.post('/houseSave/removeOne', str, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			});
		}

		function removeAll() {
			var userId = user.getUserId();
			var str = $.param({userId: userId});
			$http.post('/houseSave/removeAll', str, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			});
		}

		function removeOne2(id) {
			var userId = user.getUserId();
			var str = $.param({
				houseId: id,
				userId: userId
			});
			$http.post('/saleRecord/removeOne', str, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			});
		}

		function removeAll2() {
			var userId = user.getUserId();
			var str = $.param({userId: userId});
			$http.post('/saleRecord/removeAll', str, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			});
		}

		function againLogin() {
			console.log("quit");
			var count = 3;
			$scope.$parent.userMsg = '<span role="presentation" class="dropdown menu-item1 menu-item-login" ng-show="style.isExist"><a ui-sref="user.login" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">登录</a></span> <span class="line" ng-show="style.isExist"></span> <span role="presentation" class="dropdown menu-item1 menu-item-register" ng-show="style.isExist"><a ui-sref="user.register" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">注册</a></span>';
			user.setStatu(0);
			(function() {
				$scope.$parent.toUrl = "user.login";
				$scope.$parent.msg = '修改成功, ' + 　count + '秒后自动跳转登录页面';
				$scope.$parent.toShow = true;
				$('#mymodal').modal('show');
				$scope.$parent.timer = $interval(function() {
					$scope.$parent.msg = '修改成功, ' + 　count + '秒后自动跳转登录页面';
					if (count === 0) {
						$interval.cancel($scope.$parent.timer);

					}
					count--;
					if (count === -1) {
						$timeout(function() {
							$state.go('user.login');
						}, 1000);
						$('#mymodal').modal('hide');
					}
				}, 1000);
			})();
		}

		$scope.updatePassword = function() {
			var data = {
				username: user.getUsername(),
				password: $scope.userMsg.oldPassword,
				newPassword: $scope.userMsg.newPassword
			}
			var str = $.param(data);
			$http.post('/user/password', str, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			.success(function(result) {
				if(result.err) {
					$scope.$parent.msg = "密码输入错误";
					console.log(data);
					$('#mymodal').modal('show');
				}
				else {

					againLogin();
				}
			})
			.error(function(err) {
				$scope.$parent.msg = "服务器错误,修改失败";
				console.log(data);
				$('#mymodal').modal('show');
			});
		}

		$scope.updateUser = function() {
			initPortrait("input-id", $scope.userMsg.loveName);
			$("#input-id").fileinput("upload");
			againLogin();
		}

		function initFileInput(ctrlName) {
			var formData = new FormData();
			var control = $('#' + ctrlName);
			control.fileinput({
				language: 'zh', //设置语言
				uploadUrl: "user/msg", //上传的地址
				browseLabel: '上传头像',
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
				// uploadExtraData: {id: id},
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

		function initPortrait(ctrlName, id) {
			var control = $('#' + ctrlName);
			var userId = user.getUserId();
			//重要，需要更新控件的附加参数内容，以及图片初始化显示
			control.fileinput('refresh', {
				uploadExtraData: { loveName: id, userId: userId }
			});
		}

	}

})();
