(function() {
  'use strict';

  angular
    .module('client')
    .directive('changeHtml', changeHtml);

  /** @ngInject */
  function changeHtml($compile) {
    //   console.log('haha');
    var directive = {
      restrict: 'AE',
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function linkFunc(scope, elem, attrs, ctrl) {
        var loginMsg = attrs.changeHtml;
        attrs.$observe("changeHtml", function(value) {
            elem.html($compile(value)(scope));
        });
        // console.log(attrs);
        // console.log(scope);
    }
  }

})();
