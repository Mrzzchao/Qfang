(function() {
  'use strict';

  angular
    .module('client')
    .service('oldHouseShow', oldHouseShow);

  /** @ngInject */
  function oldHouseShow() {
      var oldHouseId = 1;
      var data;
      var defaultData = {
          id: "GZFY059902835",
          showKeyword: "配套齐全，西丽广场，西丽小学，西丽公园，番禺华侨城二手房三室",
          houseAbout: {
              roomC: "3室2厅",
              size: "124",
              decoration: "精装修",
              born: "1989",
              direction: "朝东南",
              allPrice: 105,
              avgPrice: 8468,
              firstPay: 31.5,
              monthPay: 3900.84
          },
          otherMsg: {
              lookTime: "随时可预约",
              aroundSchool: "广州市番禺区市桥西丽小学",
              specials: ["红本在手"],
              recommend: "好房子"
          },
          houseAddress: {
              floor: "高层 /8层",
              community: "华侨城",
              area: "番禺",
              road: "市桥西",
              detail: "广州市番禺区西丽南路228号"
          },
          owner: {
              xingming: "罗卫彬",
              tel: "185 2031 4883"
          },
          traffic: "华侨城  华侨城 房源优势 1.正规户型： 3室。朝向： 南  日照充足。 2.现在的房子相比前期有优势 3.室内装修情况：精装修",
          surroundings: "华侨城  华侨城 房源优势 1.正规户型： 3室。朝向： 南  日照充足。 2.现在的房子相比前期有优势 3.室内装修情况：精装修",
          imgUrls: [
              "CvtcKlgoBbCASFjmAAFRMLctOFA972.jpg",
              "CvtcMlgoA1eARWmwAAFzQ1qDOb8499.jpg",
              "CvtcKlgoBbOALTMRAAHw9E4fH98855.jpg",
              "CvtcN1goA_WAAAP8AAIM9eRowmY285.jpg",
              "CvtcMlgoA06AELuDAAGkfL6NLpk631.jpg",
              "CvtcMFgoBbCAWJFjAAFUAu-4iWs400.jpg",
              "CvtcMFgoBb2APgR2AAE0tWYPWlQ525.jpg"
          ]
      }
      return {
          getData: function() {
              console.log(data);
              return data ? data : defaultData;
          },
          setData: function(obj) {
              console.log("===========");
              console.log(obj);
              data = $.extend(true, {}, obj);
              console.log(data);
          }
      }
  }

})();
