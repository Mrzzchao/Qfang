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
		function HeadTopController($scope, $state, $location, user, oldHouseArr) {
			var data = user.getData();
			$scope.quit = function() {
				console.log("quit");
				$scope.userMsg = '<span role="presentation" class="dropdown menu-item1 menu-item-login" ng-show="style.isExist"><a ui-sref="user.login" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">登录</a></span> <span class="line" ng-show="style.isExist"></span> <span role="presentation" class="dropdown menu-item1 menu-item-register" ng-show="style.isExist"><a ui-sref="user.register" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">注册</a></span>';
				user.setStatu(0);
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
				$scope.quit();
			}
			else {
				$scope.userMsg = '<span class="welcome" > 欢迎您，尊贵的 <a ui-sref="user">' + data.username + '</a></span> <a ng-click="quit()"">退出</a>';
			}
		}
	}

})();
