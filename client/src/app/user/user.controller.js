(function() {
	'use strict';

	angular
		.module('client')
		.controller('UserController', UserController);

	/** @ngInject */
	function UserController($scope) {
		$scope.msg = "";
		$scope.toShow = false;
		$scope.toUrl = "";
		$scope.style = {
			bgColor: "gray",
			isExist: false,
			iconPos: "icon-pos2",
			iconW: "w-185",
			menuItem: "menu-item2"
		}

	}

})();
