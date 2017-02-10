(function() {
  'use strict';

  angular
    .module('client')
    .directive('carouselBox', carouselBox);

  /** @ngInject */
  function carouselBox() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/carouselBox/carouselBox.tpl.html',
      controller: CarouselBoxController,
      link: CarouselBoxLink
    };

    return directive;

    /** @ngInject */
    function CarouselBoxController($scope) {
        $scope.imgUrls = $scope.oldHouseMsg.imgUrls;
    }

    function CarouselBoxLink(scope, elem, attrs, ctrl) {
        var new_li;
        console.log(scope.imgUrls);
        for(var i = 0, len = scope.imgUrls.length; i < len; i++) {
            new_li = $("<li></li>");
            new_li.html("<img src='assets/images/oldHouse/" + scope.imgUrls[i] + ".jpg' width='130' height='98'><div class='bun_bg'></div>");
            $(".small_list ul").append(new_li);
        }

        for(var i = 0, len = scope.imgUrls.length; i < len; i++) {
            new_li = $("<li></li>");
            new_li.html("<img src='assets/images/oldHouse/" + scope.imgUrls[i] + ".jpg' width='690' height='517'>");
            $(".large_box ul").append(new_li);
        }
        (function($){
            //默认参数
            var defaluts = {
                large_elem: "large_elem",     //大图
                small_elem: "small_elem",    //小图
                left_btn: "left_btn",        //左按钮
                right_btn: "right_btn" ,    //右按钮
                state: "on",                 // 类
                speed: "normal",             //速度
                vis: 4                        //项数
            };
            $.fn.extend({
                /* 带缩略图的轮播效果 */
                "thumbnailImg": function (options) {
                    var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
                    //遍历匹配元素的集合
                    return this.each(function () {
                        var $this = $(this);
                        /* 初始化 */
                        $(opts.large_elem).find("ul li").eq(0).show();
                        $(opts.small_elem).find("ul li").eq(0).addClass(opts.state);
                        var l = $(opts.small_elem).find("ul li").length;
                        var l_mean;
                        if(l < opts.vis){
                            l_mean = 0;
                        }else{
                            l_mean = ((parseInt(l / opts.vis) - 1) * opts.vis) + (l % opts.vis);
                        }
                        var w = $(opts.small_elem).find("ul li").outerWidth(true);  //缩略图项的宽度（包含内边距）
                        $(opts.small_elem).find("ul").css("width",l * w + "px");    //初始化缩略图总宽度
                        /* 缩略图点击 */
                        $(opts.small_elem).find("ul li").click(function(){
                            $(this).addClass(opts.state).siblings().removeClass(opts.state);
                            Img($(this).index());
                        });
                        /* 左按钮 */
                        $(opts.left_btn).click(function(){
                            var i;
                            $(opts.small_elem).find("ul li").each(function(index){
                                if($(this).hasClass(opts.state)){
                                    i = index;
                                }
                            });
                            i--;
                            if(i < 0){
                                i = l - 1;
                            }
                            $(opts.small_elem).find("ul li").eq(i).addClass(opts.state).siblings().removeClass(opts.state);
                            var ml = i * w;
                            if(ml <= l_mean * w){
                                $(opts.small_elem).find("ul").stop().animate({
                                    marginLeft: -ml + "px"
                                },opts.speed)
                            }else{
                                $(opts.small_elem).find("ul").stop().animate({
                                    marginLeft: -(l_mean * w) + "px"
                                },opts.speed)
                            }
                            Img(i)
                        });
                        /* 右按钮 */
                        $(opts.right_btn).click(function(){
                            var i;
                            $(opts.small_elem).find("ul li").each(function(index){
                                if($(this).hasClass(opts.state)){
                                    i = index;
                                }
                            });
                            i++;
                            if(i > l-1){
                                i = 0;
                            }
                            $(opts.small_elem).find("ul li").eq(i).addClass(opts.state).siblings().removeClass(opts.state);
                            var ml = i * w;
                            if(ml <= l_mean * w){
                                $(opts.small_elem).find("ul").stop().animate({
                                    marginLeft: -ml + "px"
                                },opts.speed)
                            }else{
                                $(opts.small_elem).find("ul").stop().animate({
                                    marginLeft: -(l_mean * w) + "px"
                                },opts.speed)
                            }
                            Img(i);
                        });
                        /* 大图 */
                        function Img(i){
                            $(opts.large_elem).find("ul li").eq(i).fadeIn().siblings().hide();
                        }
                    });
                }
            });
        })(jQuery);

        $(function() {
            /* 商品轮播图（带缩略图的轮播效果） */
            $(".banner").thumbnailImg({
                large_elem: ".large_box",
                small_elem: ".small_list",
                left_btn: ".left_btn",
                right_btn: ".right_btn"
            });

        });
    }
  }

})();
