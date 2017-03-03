(function() {
  'use strict';

  angular
    .module('client')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, user, oldHouseArr) {
      var self = this;
      var count = 3;
      $scope.isLogin = false;
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

      $scope.toSale = function() {
          if(status == 0) {
              (function() {
                  $scope.toUrl = "user.login";
                  $scope.msg = '请先登录在进行业务委托, ' + 　count + '秒后自动跳转登录页面';
                  $scope.toShow = true;
                  $('#mymodal').modal('show');
                  $scope.timer = $interval(function() {
                      $scope.msg = '请先登录在进行业务委托, ' + 　count + '秒后自动跳转登录页面';
                      if (count === 0) {
                          $interval.cancel($scope.timer);

                      }
                      count--;
                      if (count === -1) {
                          $timeout(function() {
                              $state.go('user.login');
                          }, 1000);
                          $('#mymodal').modal('hide');
                      }
                  }, 1000);
              })();
          }
          else {
              console.log("=============1");
              $state.go("sale.step1");
          }
      }

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
