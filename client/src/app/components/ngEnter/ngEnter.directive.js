(function() {
  'use strict';

  angular
    .module('client')
    .directive('ngEnter', ngEnter);

  /** @ngInject */
  function ngEnter() {
    var directive = {
      restrict: 'E',

      controller: NgEnterController,
      link: NgEnterLink
    };

    return directive;

    /** @ngInject */
    function NgEnterController($scope) {
        // $scope.message = {
        //     title: ["二手好房", "为你而选"],
        //     caption: ["特色精选", "选择自己喜欢的类型"],
        //     more: "更多二手房 >>"
        // };
    }
    function NgEnterLink(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
    });
    }
  }

})();
