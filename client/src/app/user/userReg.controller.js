(function() {
	'use strict';

	angular
		.module('client')
		.controller('UserRegController', UserRegController);

	/** @ngInject */
	function UserRegController($scope, $location, $http, $interval, $state, $timeout, pattern, user, extend) {
		var self = this;
		var key = $location.absUrl().split(".")[1];
		$scope.test1 = "";
		$scope.test2 = "";
		$scope.isSelected = false;
		$scope.pattern = pattern; // 验证
		$scope.isLogin = false;
		$scope.register = {
			username: "",
			password: ""
		};
		var baseUrl = '/user';
		// var isMe = false; // 判断服务器是否存在
		var count = 3; // 倒计时
		// $http.get(baseUrl + '/register').error(function(result) {
		// 	isMe = true;
		// });
		// 注册
		$scope.signup = function() {
				(function() {
					var tmp = {};
					var dataStr = '';
					extend(tmp, $scope.register);
					dataStr = $.param(tmp);
					console.log(dataStr);
					$http.post(baseUrl + '/register', dataStr, {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					}).success(function(data) {
						if (data.err) {
							if (data.err.code) {
								$scope.codeShow = true;
							} else {
								$scope.msg = data.err.name;
								$('#mymodal').modal('show');
							}
						}
						else {
							successRegister();
						}

					}).error(function(data) {
						$scope.msg = '未知错误, 请重试';
						$('#mymodal').modal('show');
					});
				})();
		}

		function successRegister() {
			user.autoSetUser($scope.register.username, $scope.register.password);
			$scope.msg = '注册成功, ' + 　count + '秒后自动跳转登录页面';
			$scope.toShow = true;
			$scope.toUrl = "user.login";
			$('#mymodal').modal('show');
			$scope.timer = $interval(function() {
				$scope.msg = '注册成功, ' + 　count + '秒后自动跳转登录页面';
				if (count === 0) {
					$interval.cancel($scope.timer);
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
