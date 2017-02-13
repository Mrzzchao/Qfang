(function() {
  'use strict';

  angular
    .module('client')
    .directive('dropdownBox', dropdownBox);

  /** @ngInject */
  function dropdownBox() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/dropdownBox/dropdownBox.tpl.html',
      scope: {
          dropdown: "="
      },
      controller: DropdownBoxController,
      link: DropdownBoxLink
    };

    return directive;

    /** @ngInject */
    function DropdownBoxController($scope) {
        $scope.listFlag = false;
        var rFlag = 1;
        $scope.listShow = function() {
            $scope.listFlag = !$scope.listFlag;
            if ($scope.listFlag) {
                $(".caret" + $scope.dropdown.id).css("transform", "rotate(180deg)");
            }
            else {
                $(".caret" + $scope.dropdown.id).css("transform", "rotate(0deg)");
            }


        }
        $scope.listSelected = function (item) {
            $scope.selectItem = item;
            $scope.listFlag = false;
            $scope.listShow();
            $(".caret" + $scope.dropdown.id).css("transform", "rotate(0deg)");
        }

    }

    function DropdownBoxLink(scope, elem, attrs, ctrl) {

    }
  }

})();
