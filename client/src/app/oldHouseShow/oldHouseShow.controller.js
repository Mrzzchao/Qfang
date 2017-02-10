(function() {
	'use strict';

	angular
		.module('client')
		.controller('OldHouseShowController', OldHouseShowController);

	/** @ngInject */
	function OldHouseShowController($scope) {
		var self = this;
		$scope.style = {
			bgColor: "gray",
			isExist: true,
			iconPos: "icon-pos2",
			iconW: "w-185",
			menuItem: "menu-item3"
		}

		$scope.oldHouseMsg = {
			id: "GZFY059902835",
			showKeyword: "配套齐全，西丽广场，西丽小学，西丽公园，番禺华侨城二手房三室",
			houseAbout: {
				roomC: "3室2厅",
				size: "124平米",
				decoration: "精装修",
				floor: "高层 /8层",
				born: "1989年建",
				direction: "朝东南",
				allPrice: 105,
				avgPrice: 8468,
				firstPay: 31.5,
				monthPay: 3900.84
			},
			otherMsg: {
				lookTime: "随时可预约",
				aroundSchool: "广州市番禺区市桥西丽小学",
			},
			houseAdress: {
				place: "华侨城",
				area: "番禺",
				road: "市桥西",
				detail: "广州市番禺区西丽南路228号"
			},
			owner: {
				xingming: "罗卫彬",
				tel: "185 2031 4883"
			},
			speciel: ["红本在手"],
			imgUrls: [
				"CvtcKlgoBbCASFjmAAFRMLctOFA972",
				"CvtcMlgoA1eARWmwAAFzQ1qDOb8499",
				"CvtcKlgoBbOALTMRAAHw9E4fH98855",
				"CvtcN1goA_WAAAP8AAIM9eRowmY285",
				"CvtcMlgoA06AELuDAAGkfL6NLpk631",
				"CvtcMFgoBbCAWJFjAAFUAu-4iWs400",
				"CvtcMFgoBb2APgR2AAE0tWYPWlQ525"
			]
		}
	}
})();
