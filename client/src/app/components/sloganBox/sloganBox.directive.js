(function() {
  'use strict';

  angular
    .module('client')
    .directive('sloganBox', sloganBox);

  /** @ngInject */
  function sloganBox() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sloganBox/sloganBox.tpl.html',
      controller: SloganBoxController
    };

    return directive;

    /** @ngInject */
    function SloganBoxController($scope) {
        // $scope.message = {
        //     title: ["二手好房", "为你而选"],
        //     caption: ["特色精选", "选择自己喜欢的类型"],
        //     more: "更多二手房 >>"
        // };
    }
  }

})();
