(function() {
	'use strict';

	angular
		.module('client')
		.filter('getArrLength', getArrLength);

	/** @ngInject */
	function getArrLength() {
		//   console.log('haha');


		return function(input) {
			//input 是传入的字符串
            return input.length;
		};

		/** @ngInject */

	}

})();
