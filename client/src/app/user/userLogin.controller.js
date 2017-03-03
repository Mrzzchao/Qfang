(function() {
	'use strict';

	angular
		.module('client')
		.controller('UserLoginController', UserLoginController);

	/** @ngInject */
	function UserLoginController($scope, $location, $http, $interval, $state, $timeout, pattern, user, extend) {
		var self = this;
		var key = $location.absUrl().split(".")[1];
		$scope.isSelected = true;
		$scope.login = user.getData();
		$scope.isLogin = true;
		$scope.remFlag = !!$scope.login.remFlag;
		$scope.pattern = pattern; // 验证
		var baseUrl = '/user';
		var isMe = false; // 判断服务器是否存在
		var count = 3; // 倒计时

		$scope.signin = function() {
			(function() {
				var tmp = {};
				var dataStr = '';
				extend(tmp, $scope.login);
				dataStr = $.param(tmp);
				$http.post(baseUrl + '/login', dataStr, {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).success(function(data) {
					if (data.err) {
						$scope.msg = data.err;
						console.log(data);
						$('#mymodal').modal('show');

					} else {
						successLogin();
					}

				}).error(function(data) {
					$scope.msg = '未知错误, 请重试';
					$('#mymodal').modal('show');
				});
			})();
		}

		function successLogin() {
			console.log($scope.remFlag);
			$scope.toUrl = "home";
			user.setUser($scope.login.username, $scope.login.password, $scope.remFlag);
			user.setStatu(1);
			$scope.msg = '登录成功, ' + 　count + '秒后自动跳转主页面';
			$scope.toShow = true;
			$('#mymodal').modal('show');
			$scope.timer = $interval(function() {
				$scope.msg = '登录成功, ' + 　count + '秒后自动跳转主页面';
				if (count === 0) {
					$interval.cancel($scope.timer);

				}
				count--;
				if (count === -1) {
					$timeout(function() {
						$state.go('home');
					}, 1000);
					$('#mymodal').modal('hide');
				}
			}, 1000);
		}

	}

})();
