(function() {
	'use strict';

	angular
		.module('client')
		.directive('textArea', textArea);

	/** @ngInject */
	function textArea() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/textArea/textArea.tpl.html',
			controller: TextAreaController
		};

		return directive;

		/** @ngInject */
		function TextAreaController($scope) {
				var lenInput = $('.textarea-item').val().length;

				$(".textarea-item").keyup(function() {
					lenInput = $(this).val().length;
					if (lenInput > 0 && lenInput <= 200) {
						$('.textareaInput').html(lenInput);
					}
				});
		}
	}

})();
