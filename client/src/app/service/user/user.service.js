(function() {
  'use strict';

  angular
    .module('client')
    .service('user', user);

  /** @ngInject */
  function user() {
      var data = {
          username: '',
          password: '',
          status: 0,     // 0 未登录， 1 已登录
          remFlag: false
      }

      if(window.localStorage) {
          data.username = localStorage.username;
          data.password = localStorage.password;
          data.remFlag = localStorage.remFlag;
      }
      console.log(localStorage);
      return {
          getData: function() {
              return data;
          },
          setUser: function(username, password, remFlag) {
              console.log(username);
              console.log(password);
              localStorage.username = username;
              localStorage.remFlag = remFlag;
              data.username = username;
              data.remFlag = remFlag;
              if (remFlag) {
                  localStorage.password = password;
                  data.password = password;
              }
              else {
                  data.password = "";
                  localStorage.password = "";
              }
          },
          setStatu: function(status) {
              data.status = status;
          },
          getStatus: function() {
              return data.status;
          },
          autoSetUser: function(username, password) {
              data.username = username;
              data.password = password;
          }
      }
  }

})();
