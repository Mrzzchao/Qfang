(function() {
	'use strict';

	angular
		.module('client')
		.controller('OldHouseController', OldHouseController);

	/** @ngInject */
	function OldHouseController($scope, $location, $state, oldHouseArr, oldHouseShow) {
		var self = this;
		$scope.style = {
			bgColor: "gray",
			isExist: true,
			iconPos: "icon-pos2",
			iconW: "w-185",
			menuItem: "menu-item3"
		}
		// oldHouseArr.requestData();
		$scope.oldHouseArr = oldHouseArr.getData();
		console.log("2-2-2-2-2-");
		console.log($scope.oldHouseArr);

		$scope.toOldHouseShow = function(data) {
			console.log("1-1-1-1-1-");
			console.log(data);
			oldHouseShow.setData(data);
			$state.go("oldHouseShow", {}, {
				reload: true
			});
		}
	}
})();
