(function() {
  'use strict';

  angular
    .module('client')
    .service('oldHouse', oldHouse);

  /** @ngInject */
  function oldHouse() {
      var data = {
          showKeyword: "",
          houseAbout: {
              roomC: {
                  bedR: "",
                  livingR: "",
                  restR: ""
              },
              size: "",
              decoration: "",
              born: "",
              direction: "",
              allPrice: ""
          },
          otherMsg: {
              lookTime: "",
              specials: "",
              recommend: ""
          },
          houseAdress: {
              detail: "",
              community: "",
              buildingBlock: "",
              floors: {
                  heightType: "",
                  floor: ""
              },
              roomN: ""
          },
          owner: {
              xingming: "",
              tel: "",
              sex: ""
          },
          imgUrls: [
          ]
      };
      return {
          getData: function() {
              return data;
          },
          setData: function(data) {
              data = $.extend(true, {}, data);
          }
      }
  }

})();
