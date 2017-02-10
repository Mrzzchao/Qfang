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
			// $scope.toOld = function() {
			// 	$state.go('oldHouse', {
			// 		isOld: true,
			// 		isNew: false
			// 	});
			// }
            // $scope.toNew = function() {
            //     $state.go('oldHouse', {
            //         isOld: false,
            //         isNew: true
            //     });
            // }

			var key = $location.absUrl().split("#")[1]; // 确定路径的关键字
			switch (key) {
				case "/oldHouse":
				case "/oldHouseShow": hander1();
				break;
				case "/newHouse": hander2();
					break;

			}

			function hander1() {
				$scope.isOld = true;
				$scope.isNew = false;
			}
			function hander2() {
				$scope.isOld = false;
				$scope.isNew = true;
			}
		}
	}

})();
