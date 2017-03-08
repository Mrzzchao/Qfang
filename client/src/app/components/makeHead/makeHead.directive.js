(function() {
  'use strict';

  angular
    .module('client')
    .directive('makeHead', makeHead);

  /** @ngInject */
  function makeHead() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/makeHead/makeHead.tpl.html',
      scope: {
          t1: "@",
          t2: "@",
          c1: "@",
          c2: "@",
          m: "@",
          url: "@"
      },
      controller: MakeHeadController
    };

    return directive;

    /** @ngInject */
    function MakeHeadController($scope, $state, oldHouseArr) {
        $scope.toUrl = function() {
            oldHouseArr.requestAllData();
            oldHouseArr.setSearchKey("");
        }
    }
  }

})();
