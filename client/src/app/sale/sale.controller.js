(function() {
	'use strict';

	angular
		.module('client')
		.controller('SaleController', SaleController);

	/** @ngInject */
	function SaleController($scope, $state, $location) {
		var self = this;
		$scope.style = {
			bgColor: "gray",
			isExist: true,
			iconPos: "icon-pos2",
			iconW: "w-185",
			menuItem: "menu-item3"
		}
		var strArr = $location.absUrl().split("");
		$scope.stepId = parseInt(strArr[strArr.length -1]);
		console.log($scope.stepId + "----");
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
})();
