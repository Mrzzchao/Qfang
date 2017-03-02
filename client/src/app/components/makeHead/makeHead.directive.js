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
    function MakeHeadController($scope) {
        // $scope.message = {
        //     title: ["二手好房", "为你而选"],
        //     caption: ["特色精选", "选择自己喜欢的类型"],
        //     more: "更多二手房 >>"
        // };
    }
  }

})();
