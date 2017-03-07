(function() {
	'use strict';

	angular
		.module('client')
		.controller('UserManage', UserManage);

	/** @ngInject */
	function UserManage($scope, $state, $location, $timeout, $http, user, oldHouseArr, oldHouseShow) {
		// $scope.msg = "";
		// $scope.toShow = false;
		// $scope.toUrl = "";
		$scope.style = {
			bgColor: "gray",
			isExist: false,
			iconPos: "icon-pos2",
			iconW: "w-185",
			menuItem: "menu-item2"
		}

		$scope.userManageMsg = {
			user: user.getData()
		};
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
			user.setStatu(0);
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
				$("#" + id).hide("slow");
			}, 1000);
			$scope.oldHouseSaveArr.count1--;
			if($scope.oldHouseSaveArr.count1 == 0) {
				$timeout(function() {
					$(".right-bottom").html("<h1 class='no-record'>未找到收藏记录</h1>");
					$scope.oldHouseSaveArr = [];
				}, 1000);
			}
			removeOne(id);
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
	}

})();
