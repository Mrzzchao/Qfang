(function() {
  'use strict';

  angular
    .module('client')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
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

    $urlRouterProvider.otherwise('/');
  }

})();
