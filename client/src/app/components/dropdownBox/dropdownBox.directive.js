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
    function DropdownBoxController($scope, $timeout) {
        $("*").scroll(function(event) {
            /* Act on the event */
            event.stopPropagation();
        });
        $scope.listShow = function() {
            console.log("222");
            console.log($scope.i_flag);
            $scope.i_flag = false;
            $scope.listFlag = !$scope.listFlag;
            if ($scope.listFlag) {
                $(".caret" + $scope.dropdown.id).css("transform", "rotate(180deg)");
            }
            else {
                $(".caret" + $scope.dropdown.id).css("transform", "rotate(0deg)");
            }
            $("dropdown" + $scope.dropdown.id).focus();
            document.getElementById("dropdown" + $scope.dropdown.id).select();
        }

        $scope.listHide = function() {
            // console.log("1");
            // console.log($scope.i_flag);
            // if($scope.i_flag) {
                console.log("--------------");
                console.log($scope.dropdown.id);
                $scope.listFlag = false;
                $(".caret" + $scope.dropdown.id).css("transform", "rotate(0deg)");
            // }
            // $scope.i_flag = true;
        }
        $scope.listSelected = function (item) {
            console.log("3");
            console.log($scope.i_flag);
            $scope.selectItem = item;
            $scope.$parent.listFlag = false;
            $(".caret" + $scope.dropdown.id).css("transform", "rotate(0deg)");
        }

    }

    function DropdownBoxLink(scope, elem, attrs, ctrl) {
    }
  }

})();
