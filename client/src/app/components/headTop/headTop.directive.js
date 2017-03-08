(function() {
	'use strict';

	angular
		.module('client')
		.directive('headTop', headTop);

	/** @ngInject */
	function headTop() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/headTop/headTop.tpl.html',
			controller: HeadTopController
		};

		return directive;

		/** @ngInject */
		function HeadTopController($scope, $state, $location, $timeout, $interval, user, oldHouseArr) {
			var data = user.getData();
			var status = user.getStatus();
			var str = $location.absUrl().split(".")[1];
			var str1 = $location.absUrl().split("#")[1];
			var count = 3;
			$scope.msg = '';
			$scope.toShow = false;
			$scope.toUrl = "";
			$scope.quit = function() {
				console.log("quit");
				$scope.userMsg = '<span role="presentation" class="dropdown menu-item1 menu-item-login" ng-show="style.isExist"><a ui-sref="user.login" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">登录</a></span> <span class="line" ng-show="style.isExist"></span> <span role="presentation" class="dropdown menu-item1 menu-item-register" ng-show="style.isExist"><a ui-sref="user.register" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">注册</a></span>';
				user.clearUser();
				$state.go("home");
			}
			$scope.toSaleRecord = function() {
				oldHouseArr.requestRecordData();
			}
			$scope.toSale = function() {
				if(status == 0) {
					if(str !== "login") {
						(function() {
							$scope.toUrl = "user.login";
							$scope.msg = '请先登录再进行业务委托, ' + 　count + '秒后自动跳转登录页面';
							$scope.toShow = true;
							$('#mymodal').modal('show');
							$scope.timer = $interval(function() {
								$scope.msg = '请先登录再进行业务委托, ' + 　count + '秒后自动跳转登录页面';
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

					}
					else {
						$scope.msg = '请先登录再进行业务委托';
						$scope.toShow = false;
						$('#mymodal').modal('show');
					}
				}
				else {
					console.log("=============1");
					$state.go("sale.step1");
				}
			}
			var key = $location.absUrl().split("#")[1]; // 确定路径的关键字
			switch (key) {
				case "/oldHouse":
				case "/oldHouseShow": hander1();
				break;
				case "/sale/sale.step1":
				case "/sale/sale.step2":
				case "/sale/sale.step3":
				case "/sale/sale.step4":
				case "/sale": hander3();
				break;
				case "/newHouse": hander2();
					break;

			}
			$scope.toOldHouse = function() {
				oldHouseArr.requestAllData();
		        oldHouseArr.setSearchKey("");
			}
			function hander1() {
				$scope.isOld = true;
				$scope.isNew = false;
				$scope.isSale = false;
			}
			function hander2() {
				$scope.isOld = false;
				$scope.isNew = true;
				$scope.isSale = false;
			}
			function hander3() {
				$scope.isOld = false;
				$scope.isNew = false;
				$scope.isSale = true;
			}

			console.log(user.getStatus());
			if(user.getStatus() == 0) {
				$scope.userMsg = '<span role="presentation" class="dropdown menu-item1 menu-item-login" ng-show="style.isExist"><a ui-sref="user.login" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">登录</a></span> <span class="line" ng-show="style.isExist"></span> <span role="presentation" class="dropdown menu-item1 menu-item-register" ng-show="style.isExist"><a ui-sref="user.register" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">注册</a></span>';
			}
			else {
				$scope.userMsg = '<span class="welcome" ><a ng-click="toSaleRecord()">' + data.name + '</a>,</span> <a ng-click="quit()"">退出</a>';
			}
		}
	}

})();
