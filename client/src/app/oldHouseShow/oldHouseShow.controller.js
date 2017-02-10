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
			special: ["红本在手"],
			reason: "华侨城  华侨城 房源优势 1.正规户型： 3室。朝向： 南  日照充足。 2.现在的房子相比前期有优势 3.室内装修情况：精装修  华侨城 房屋介绍 1.客厅宽敞，舒适，使用率高 2.卧室温馨，居住理想。 3.厨房设施齐全，让美味更加轻松起来  华侨城 社区配套 1.环境优雅，属于低密度社区 2.小区绿 化 高，让您感受花园一般的家  周边配套设施完善,应有尽有，满足生活所需为您的生活增添色彩 有商场······特别方便。包括银行，医院，西丽小学，机关幼儿园 华侨城 推荐理由 楼盘位于市桥，位置非常好，公交非常多，您去那里都非常方便 全部房源真实有效，且之前我亲自实堪过。  看房提前预约，欢迎您点击我的头像进入我的店铺，有更多优质房源，或许能有意外收获。本人熟悉交易流程，而且本人服务热情周到，专业，真诚，30%的客户都为我转接新的客户 。 只需您的一个来电，相信我，定能匹配您的需求。",
			traffic: "华侨城  华侨城 房源优势 1.正规户型： 3室。朝向： 南  日照充足。 2.现在的房子相比前期有优势 3.室内装修情况：精装修",
			surroundings: "华侨城  华侨城 房源优势 1.正规户型： 3室。朝向： 南  日照充足。 2.现在的房子相比前期有优势 3.室内装修情况：精装修",
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

		$scope.showMore = function() {
			var imgC = $scope.imgUrls.length;
			var oneH = 350;
			var space = 40;
			var defaluts = 740;
			var allH = (oneH + space) * Math.ceil(imgC/2);
			var speed = oneH + space;

			var picContentH = $(".pic-content").height();
			console.log(allH);
			console.log(picContentH);
			if(picContentH + space + speed > allH) {
				$(".pic-content").height(defaluts);
				$(".show_more a").text("显示更多图片");
			}
			else if(picContentH + space + speed == allH) {
				$(".show_more a").text("收起");
				$(".pic-content").height(picContentH + speed);
			}
			else {
				$(".show_more a").text("显示更多图片");
				$(".pic-content").height(picContentH + speed);
			}
		}
	}
})();
