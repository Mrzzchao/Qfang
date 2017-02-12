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
	}
})();
