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
          dropdown: "=",
          selectItem: "=selectitem"
      },
      controller: DropdownBoxController,
      link: DropdownBoxLink
    };

    return directive;

    /** @ngInject */
    function DropdownBoxController($scope, $timeout) {
        $scope.getModel = function() {
            return "222";
        }

        watchModel($scope);
        // $scope.selectItem = "";
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

    function watchModel($scope) {
        // $scope.$watch("$parent.oldHouseMsg.houseAbout.roomC.bedR", function(newValue,oldValue, scope) {
        //     scope.selectItem = newValue;
        // }, false);
        // $scope.$watch("$parent.oldHouseMsg.houseAbout.roomC.livingR", function(newValue,oldValue, scope) {
        //     scope.selectItem = newValue;
        // }, false);
        // $scope.$watch("$parent.oldHouseMsg.houseAbout.roomC.restR", function(newValue,oldValue, scope) {
        //     scope.selectItem = newValue;
        // }, false);
        // $scope.$watch("$parent.oldHouseMsg.houseAdress.buildingBlock", function(newValue,oldValue, scope) {
        //     scope.selectItem = newValue;
        // }, false);
        // $scope.$watch("$parent.oldHouseMsg.houseAbout.directionR", function(newValue,oldValue, scope) {
        //     scope.selectItem = newValue;
        // }, false);
        // $scope.$watch("$parent.oldHouseMsg.houseAbout.decoration", function(newValue,oldValue, scope) {
        //     scope.selectItem = newValue;
        // }, false);
        // $scope.$watch("$parent.oldHouseMsg.houseAdress.floors.heightType", function(newValue,oldValue, scope) {
        //     scope.selectItem = newValue;
        // }, false);
        // $scope.$watch("$parent.oldHouseMsg.otherMsg.lookTime", function(newValue,oldValue, scope) {
        //     scope.selectItem = newValue;
        // }, false);
    }

    function DropdownBoxLink(scope, elem, attrs, ctrl) {
        // console.log("1-------------");
        // console.log(attrs);
        // scope.$watch(attrs.selectItem, function(value) {
        //     console.log("2----------");
        //     console.log(value);
        //   scope.selectItem = value;
        // });
    }
  }

})();
