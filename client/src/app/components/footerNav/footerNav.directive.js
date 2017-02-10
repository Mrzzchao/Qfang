(function() {
  'use strict';

  angular
    .module('client')
    .directive('footerNav', footerNav);

  /** @ngInject */
  function footerNav() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footerNav/footerNav.tpl.html',
      controller: FooterNavController
    };

    return directive;

    /** @ngInject */
    function FooterNavController($scope) {
        // $scope.message = {
        //     title: ["二手好房", "为你而选"],
        //     caption: ["特色精选", "选择自己喜欢的类型"],
        //     more: "更多二手房 >>"
        // };
    }
  }

})();
