(function() {
  'use strict';

  angular
    .module('client')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($scope, $stateParams) {
      var self = this;
      $scope.userFlag = !$stateParams.resFlag;
      $scope.isSelected = !$stateParams.resFlag;
      $scope.style = {
          bgColor: "gray",
          isExist: false,
          iconPos: "icon-pos2",
          iconW: "w-185",
          menuItem: "menu-item2"
      }

      self.toLogin = function() {
          $scope.userFlag = true;
          $scope.isSelected = true;
      }

      self.toRegister = function() {
          $scope.userFlag = false;
          $scope.isSelected = false;
      }


  }
})();
