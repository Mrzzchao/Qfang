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
		function HeadTopController($scope, $state, $location) {
			$scope.toRegister = function() {
				$state.go('user', {
					resFlag: true
				});
			}
			$scope.toLogin = function() {
				$state.go('user', {
					resFlag: false
				});
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
		}
	}

})();
