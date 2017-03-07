(function() {
  'use strict';

  angular
    .module('client')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'MainCtrl'
      })
      .state('user', {
        url: '/user',
        templateUrl: 'app/user/user.html',
        controller: 'UserController',
        params: {'resFlag': {}},
        controllerAs: 'UserCtrl'
      })
      .state('user.login', {
        url: '/user.login',
        templateUrl: 'app/user/user.login.html',
        controller: 'UserLoginController'
      })
      .state('user.register', {
        url: '/user.register',
        templateUrl: 'app/user/user.register.html',
        controller: 'UserRegController'
      })
      .state('oldHouse', {
        url: '/oldHouse',
        templateUrl: 'app/oldHouse/oldHouse.html',
        controller: 'OldHouseController',
        controllerAs: 'OldHouseCtrl'
      })
      .state('oldHouseShow', {
        url: '/oldHouseShow',
        templateUrl: 'app/oldHouseShow/oldHouseShow.html',
        controller: 'OldHouseShowController',
        controllerAs: 'OldHouseShowCtrl'
      })
      .state('sale', {
        url: '/sale',
        templateUrl: 'app/sale/sale.html',
        controller: 'SaleController',
        controllerAs: 'SaleCtrl'
      })
      .state('sale.step1', {
        url: '/sale.step1',
        templateUrl: 'app/sale/sale.step1.html',
        controller: 'SaleController',
        params: {'stepId': {}},
        controllerAs: 'SaleCtrl'
      })
      .state('sale.step2', {
        url: '/sale.step2',
        templateUrl: 'app/sale/sale.step2.html',
        params: {'stepId': {}},
        controller: 'SaleController',
        controllerAs: 'SaleCtrl'
      })
      .state('sale.step3', {
        url: '/sale.step3',
        templateUrl: 'app/sale/sale.step3.html',
        params: {'stepId': {}},
        controller: 'SaleController',
        controllerAs: 'SaleCtrl'
      })
      .state('sale.step4', {
        url: '/sale.step4',
        templateUrl: 'app/sale/sale.step4.html',
        params: {'stepId': {}},
        controller: 'SaleController',
        controllerAs: 'SaleCtrl'
      })
      .state('userManage', {
        url: '/userManage',
        templateUrl: 'app/userManage/userManage.html',
        controller: 'UserManage',
        controllerAs: 'UserManageCtrl'
      })
      .state('userManage.saleRecord', {
        url: '/userManage.saleRecord',
        templateUrl: 'app/userManage/userManage.saleRecord.html',
        controller: 'UserManage',
        controllerAs: 'UserManageCtrl'
      })
      .state('userManage.save', {
        url: '/userManage.save',
        templateUrl: 'app/userManage/userManage.save.html',
        controller: 'UserManage',
        controllerAs: 'UserManageCtrl'
      })
    $urlRouterProvider.otherwise('/');
  }

})();
