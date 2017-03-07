(function() {
	'use strict';

	angular
		.module('client')
		.controller('OldHouseShowController', OldHouseShowController);

	/** @ngInject */
	function OldHouseShowController($scope, $interval, $timeout, $state, oldHouseShow, user) {
		var self = this;
		var userId = user.getUserId();
		$scope.style = {
			bgColor: "gray",
			isExist: true,
			iconPos: "icon-pos2",
			iconW: "w-185",
			menuItem: "menu-item3"
		}

		$scope.oldHouseMsg = oldHouseShow.getData();
		var saveUserId = $scope.oldHouseMsg.saveUserId;
		console.log("saveUserId++++++++++++++++");
		console.log(saveUserId);
		console.log(userId);
		console.log(saveUserId.indexOf(userId));
		if(saveUserId.indexOf(userId + "") == -1) {
			$scope.oldHouseMsg.saveStatu = "房源收藏";
		}
		else {
			$scope.oldHouseMsg.saveStatu = "已收藏";
		}
		console.log($scope.oldHouseMsg);
		$scope.showMore = function() {
			var imgC = $scope.imgUrls.length;
			var oneH = 350;
			var space = 40;
			var defaluts = 740;
			var allH = (oneH + space) * Math.ceil(imgC/2);
			var speed = oneH + space;

			var picContentH = $(".pic-content").height();
			console.log(allH);
			console.log(picContentH);
			if(picContentH + space + speed > allH) {
				$(".pic-content").height(defaluts);
				$(".show_more a").text("显示更多图片");
			}
			else if(picContentH + space + speed == allH) {
				$(".show_more a").text("收起");
				$(".pic-content").height(picContentH + speed);
			}
			else {
				$(".show_more a").text("显示更多图片");
				$(".pic-content").height(picContentH + speed);
			}
		}
		$scope.houseSave = function(id) {
			if(user.getStatus() == 0) {
				(function() {
					var count = 3;
					$scope.toUrl = "user.login";
					$scope.msg = '请先登录再进行收藏, ' + 　count + '秒后自动跳转登录页面';
					$scope.toShow = true;
					$('#mymodal').modal('show');
					$scope.timer = $interval(function() {
						$scope.msg = '请先登录再进行收藏, ' + 　count + '秒后自动跳转登录页面';
						if (count === 0) {
							$interval.cancel($scope.timer);

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
				return;
			}
			else {
				if($scope.oldHouseMsg.saveStatu != "已收藏") {
					oldHouseShow.save(id);
					$scope.oldHouseMsg.saveStatu = "已收藏";
				}
			}
		}

		// $scope.
	}
})();
