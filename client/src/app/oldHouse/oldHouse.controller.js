(function() {
	'use strict';

	angular
		.module('client')
		.controller('OldHouseController', OldHouseController);

	/** @ngInject */
	function OldHouseController($scope, $location) {
		var self = this;
		$scope.style = {
			bgColor: "gray",
			isExist: true,
			iconPos: "icon-pos2",
			iconW: "w-185",
			menuItem: "menu-item3"
		}

		$scope.oldHouseArr = [{
				showKeyword: "配套齐全，西丽广场，西丽小学，西丽公园，番禺华侨城二手房三室",
				houseAbout: {
					roomC: "3室2厅",
					size: "124平米",
					decoration: "精装修",
					floor: "高层 /8层",
					age: "1989年建",
					allPrice: 120,
					avgPrice: 23077
				},
				houseAdress: {
					place: "华侨城",
					area: "番禺",
					road: "市桥西",
					detail: "广州市番禺区西丽南路228号"
				},
				xingming: "罗卫彬",
				speciel: ["红本在手"]
			}, {
				showKeyword: "配套齐全，西丽广场，西丽小学，西丽公园，番禺华侨城二手房三室",
				houseAbout: {
					roomC: "3室2厅",
					size: "124平米",
					decoration: "精装修",
					floor: "高层 /8层",
					age: "1989年建",
					allPrice: 120,
					avgPrice: 23077
				},
				houseAdress: {
					place: "华侨城",
					area: "番禺",
					road: "市桥西",
					detail: "广州市番禺区西丽南路228号"
				},
				xingming: "罗卫彬",
				speciel: ["红本在手"]
			}, {
				showKeyword: "配套齐全，西丽广场，西丽小学，西丽公园，番禺华侨城二手房三室",
				houseAbout: {
					roomC: "3室2厅",
					size: "124平米",
					decoration: "精装修",
					floor: "高层 /8层",
					age: "1989年建",
					allPrice: 120,
					avgPrice: 23077
				},
				houseAdress: {
					place: "华侨城",
					area: "番禺",
					road: "市桥西",
					detail: "广州市番禺区西丽南路228号"
				},
				xingming: "罗卫彬",
				speciel: ["红本在手"]
			},
		];
	}
})();
