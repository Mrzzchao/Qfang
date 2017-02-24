(function() {
	'use strict';

	angular
		.module('client')
		.controller('UserRegController', UserRegController);

	/** @ngInject */
	function UserRegController($scope, $location, $http, $interval, $state, $timeout, pattern, user) {
		var self = this;
		var key = $location.absUrl().split(".")[1];
        $scope.test1 = "";
        $scope.test2 = "";
		$scope.isSelected = false;
		$scope.pattern = pattern; // 验证
		$scope.toUrl = "user.login";
        $scope.msg = "";
		$scope.register = {
			username: "",
			password: ""
		};
		var baseUrl = '/user';
		var isMe = false; // 判断服务器是否存在
		var count = 3; // 倒计时
		$http.get(baseUrl + '/register').error(function(result) {
			isMe = true;
		});
		// 注册
		$scope.signup = function() {
            console.log("11");
            console.log($scope.register);
			successRegister();
		}

		function successRegister() {
			user.setUser($scope.register.username, $scope.register.password, $scope.register.remFlag);
			$scope.msg = '注册成功, ' + 　count + '秒后自动跳转登录页面';
			$scope.toShow = true;
			$('#mymodal').modal('show');
			$scope.timer = $interval(function() {
				$scope.msg = '注册成功, ' + 　count + '秒后自动跳转登录页面';
				if (count === 0) {
					$interval.cancel(timer);
				}
				count--;
				if (count === -1) {
					$timeout(function() {
						$state.go("user.login");
					}, 1000);
					$('#mymodal').modal('hide');
				}
			}, 1000);
		}

        console.log($scope.register);
	}

})();
