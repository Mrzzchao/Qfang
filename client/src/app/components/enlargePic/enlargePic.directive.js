(function() {
  'use strict';

  angular
    .module('client')
    .directive('enlargePic', enlargePic)
    .directive('closePic', closePic);
  /** @ngInject */
  function enlargePic() {
    //   console.log('haha');
    var directive = {
      restrict: 'AE',
    //   templateUrl: 'app/components/enlargePic/enlargePic.tpl.html',
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function linkFunc(scope, elem, attrs, ctrl) {
        // jQuery.fn.center = function () {
        //   this.css("position","absolute");
        //   this.css("top", ( $(window).height() – this.height() ) / 2+$(window).scrollTop() + "px");
        //   this.css("left", ( $(window).width() – this.width() ) / 2+$(window).scrollLeft() + "px");
        //   return this;
        //   }
        // $(".mask").get(0).center();
        // $(".pic-box").get(0).center();
        elem.bind('click',function($event){
            document.documentElement.style.overflow='hidden';
            // $(document.body).scroll(function(event) {
            //     /* Act on the event */
            //     return false;
            // });
            var img = $event.srcElement || $event.target;
            console.log(angular.element(document.querySelector(".enlargePic-div")));
            angular.element(document.querySelector(".enlargePic-div")).show();
            document.querySelector(".bigPic").src = img.src;
        })
    }
  }

  function closePic() {
      var directive = {
        restrict: 'AE',
        // templateUrl: 'app/components/closePic/closePic.tpl.html',
        link: linkFunc
      };

      return directive;

      function linkFunc(scope, elem, attrs, ctrl) {
        //   $(document.body).scroll(function(event) {
        //       /* Act on the event */
        //       return true;
        //   });
              elem.bind('click',function($event){
                  document.documentElement.style.overflow='scroll';
                  angular.element(document.querySelector(".enlargePic-div")).hide();
              });

      }
  }

})();
