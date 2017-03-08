(function() {
  'use strict';

  angular
    .module('client')
    .service('user', user);

  /** @ngInject */
  function user() {
      var data = {
		  avatar: "no-userphoto.gif",
          loveName: "",
          username: '',
          password: '',
          status: 0,     // 0 未登录， 1 已登录
          remFlag: false,
          userId: ""
      }

      if(window.localStorage) {
          data.username = localStorage.username;
          data.password = localStorage.password;
          data.remFlag = localStorage.remFlag;
      }
      console.log("=++===++=+=+");
      console.log(data.loveName && data.username);
      data.name = data.loveName ? data.loveName : data.username;
      console.log(localStorage);
      return {
          getData: function() {
              if(window.localStorage) {
                  data.username = localStorage.username;
                  data.password = localStorage.password;
                  data.remFlag = localStorage.remFlag;
              }
              return data;
          },
          setUser: function(username, password, remFlag, userData) {
              console.log(username);
              console.log(password);
              localStorage.username = username;
              localStorage.remFlag = remFlag;
              data.username = username;
              data.remFlag = remFlag;
              data.userId = userData.userId;
              data.avatar = userData.avatar ? userData.avatar : "no-userphoto.gif";
              data.name = userData.loveName ? userData.loveName : userData.username;
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
          clearUser: function() {
              data = {
        		  avatar: "no-userphoto.gif",
                  loveName: "",
                  username: '',
                  password: '',
                  status: 0,     // 0 未登录， 1 已登录
                  remFlag: false,
                  userId: ""
              };
          },
          getUserId: function() {
              return data.userId;
          },
          getUsername: function() {
              return data.username;
          },
          autoSetUser: function(username, password) {
              data.username = username;
              data.password = password;
          }
      }
  }

})();
