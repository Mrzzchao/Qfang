(function() {
  'use strict';

  var app = angular
    .module('client', ['ngAnimate', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr']);

    app.controller('appCtrl', function($scope) {
      $scope.p = '广东';
      $scope.c = '广州';
      $scope.a = '天河区';
      return $scope.d = '五山路';
    });

})();
