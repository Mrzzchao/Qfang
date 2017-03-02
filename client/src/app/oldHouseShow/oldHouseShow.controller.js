(function() {
	'use strict';

	angular
		.module('client')
		.controller('OldHouseShowController', OldHouseShowController);

	/** @ngInject */
	function OldHouseShowController($scope, oldHouseShow) {
		var self = this;
		$scope.style = {
			bgColor: "gray",
			isExist: true,
			iconPos: "icon-pos2",
			iconW: "w-185",
			menuItem: "menu-item3"
		}

		$scope.oldHouseMsg = oldHouseShow.getData();
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
	}
})();
