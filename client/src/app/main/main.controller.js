(function() {
  'use strict';

  angular
    .module('client')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, user, oldHouseArr) {
      var self = this;
      $scope.oldHouseMes = {
          title: ["二手好房", "为你而选"],
          caption: ["特色精选", "选择自己喜欢的类型"],
          more: "更多二手房 >>"
      };
      $scope.newHouseMes = {
          title: ["热门新盘", "品质优选"],
          caption: ["精选特惠新盘", "享最高额度优惠"],
          more: "更多广州新房>>"
      }

      $scope.style = {
          bgColor: "transparent",
          isExist: function() {

          },
          iconPos: "icon-pos1",
          iconW: "w-191",
          menuItem: "menu-item1"
      }

      $scope.cateType = [
          "地铁房",
          "红本在手",
          "住家三房",
          "刚需小户",
          "不限购",
          "优选大宅"
      ];

      $scope.toOldHouse = function() {
          oldHouseArr.requestAllData();
          oldHouseArr.setSearchKey("");
      }
      $scope.queryCate = function(type) {
          console.log(type);
          oldHouseArr.requestCateData(type);
      }
      $scope.searchData = function() {
          oldHouseArr.setSearchKey($scope.search);
          oldHouseArr.requestAllData();
      }
  }
})();
