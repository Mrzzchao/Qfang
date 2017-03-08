(function() {
	'use strict';

	angular
		.module('client')
		.service('oldHouseArr', oldHouseArr);

	/** @ngInject */
	function oldHouseArr($http, $timeout, $state, $location, user) {
		var tmp = [];
		var data = [];
		var data2 = [];
		var data3 = [];
		var searchKey = "";
		var routerL = $location.absUrl().split("#")[1];
        var defaultData = [
            {
				saveUserId: ["4"],
                oldHouseId: 1,
                showKeyword: "你的房子",
                houseAbout: {
                    roomC: {
                        bedR: "2",
                        livingR: "1",
                        restR: "1"
                    },
                    size: "602",
                    decoration: "精装修",
                    born: "1 2 2 1980",
                    direction: "朝东南",
                    allPrice: "200"
                },
                otherMsg: {
                    lookTime: "随时预约",
                    specials: ["红本在手"],
                    recommend: "好房子"
                },
                houseAddress: {
                    detail: "广东 广州 番禺区 西丽南路228号",
                    community: "汇景新城",
                    buildingBlock: "A1",
                    floors: {
                        heightType: "高层",
                        floor: "8"
                    },
                    roomN: "304"
                },
                owner: {
                    xingming: "张三",
                    tel: "18825085447",
                    sex: "男"
                },
                imgUrls: [
                    "CvtcKlgoBbCASFjmAAFRMLctOFA972.jpg",
                    "CvtcMlgoA1eARWmwAAFzQ1qDOb8499.jpg",
                    "CvtcKlgoBbOALTMRAAHw9E4fH98855.jpg",
                    "CvtcN1goA_WAAAP8AAIM9eRowmY285.jpg",
                    "CvtcMlgoA06AELuDAAGkfL6NLpk631.jpg",
                    "CvtcMFgoBbCAWJFjAAFUAu-4iWs400.jpg",
                    "CvtcMFgoBb2APgR2AAE0tWYPWlQ525.jpg"
                ]
            },
			{
				saveUserId: ["4"],
                oldHouseId: 2,
                showKeyword: "我的房子",
                houseAbout: {
                    roomC: {
                        bedR: "2",
                        livingR: "1",
                        restR: "1"
                    },
                    size: "112",
                    decoration: "精装修",
                    born: "1 2 2 1980",
                    direction: "朝东南",
                    allPrice: "900"
                },
                otherMsg: {
                    lookTime: "随时预约",
                    specials: ["红本在手", "刚需小户"],
                    recommend: "好房子"
                },
                houseAddress: {
                    detail: "广东 广州 番禺区 西丽南路228号",
                    community: "汇景新城",
                    buildingBlock: "H1",
                    floors: {
                        heightType: "高层",
                        floor: "105"
                    },
                    roomN: "304"
                },
                owner: {
                    xingming: "张三",
                    tel: "18825085447",
                    sex: "男"
                },
                imgUrls: [
                    "CvtcKlgoBbCASFjmAAFRMLctOFA972.jpg",
                    "CvtcMlgoA1eARWmwAAFzQ1qDOb8499.jpg",
                    "CvtcKlgoBbOALTMRAAHw9E4fH98855.jpg",
                    "CvtcN1goA_WAAAP8AAIM9eRowmY285.jpg",
                    "CvtcMlgoA06AELuDAAGkfL6NLpk631.jpg",
                    "CvtcMFgoBbCAWJFjAAFUAu-4iWs400.jpg",
                    "CvtcMFgoBb2APgR2AAE0tWYPWlQ525.jpg"
                ]
            },
			{
				saveUserId: ["4"],
                oldHouseId: 3,
                showKeyword: "我的房子",
                houseAbout: {
                    roomC: {
                        bedR: "2",
                        livingR: "1",
                        restR: "1"
                    },
                    size: "125",
                    decoration: "精装修",
                    born: "1 2 2 1980",
                    direction: "朝东南",
                    allPrice: "503"
                },
                otherMsg: {
                    lookTime: "随时预约",
                    specials: ["红本在手"],
                    recommend: "好房子"
                },
                houseAddress: {
                    detail: "广东 广州 番禺区 西丽南路228号",
                    community: "汇景新城",
                    buildingBlock: "A1",
                    floors: {
                        heightType: "高层",
                        floor: "8"
                    },
                    roomN: "304"
                },
                owner: {
                    xingming: "张三",
                    tel: "18825085447",
                    sex: "男"
                },
                imgUrls: [
                    "CvtcKlgoBbCASFjmAAFRMLctOFA972.jpg",
                    "CvtcMlgoA1eARWmwAAFzQ1qDOb8499.jpg",
                    "CvtcKlgoBbOALTMRAAHw9E4fH98855.jpg",
                    "CvtcN1goA_WAAAP8AAIM9eRowmY285.jpg",
                    "CvtcMlgoA06AELuDAAGkfL6NLpk631.jpg",
                    "CvtcMFgoBbCAWJFjAAFUAu-4iWs400.jpg",
                    "CvtcMFgoBb2APgR2AAE0tWYPWlQ525.jpg"
                ]
            },
			{
				saveUserId: ["4"],
                oldHouseId: 4,
                showKeyword: "我的房子",
                houseAbout: {
                    roomC: {
                        bedR: "2",
                        livingR: "1",
                        restR: "1"
                    },
                    size: "190",
                    decoration: "精装修",
                    born: "1 2 2 1980",
                    direction: "朝东南",
                    allPrice: "552"
                },
                otherMsg: {
                    lookTime: "随时预约",
                    specials: ["红本在手"],
                    recommend: "好房子"
                },
                houseAddress: {
                    detail: "广东 广州 番禺区 西丽南路228号",
                    community: "汇景新城",
                    buildingBlock: "A1",
                    floors: {
                        heightType: "高层",
                        floor: "8"
                    },
                    roomN: "304"
                },
                owner: {
                    xingming: "张三",
                    tel: "18825085447",
                    sex: "男"
                },
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
        ];
        // request();
        // $http.get("/oldHouse")
        // .success(function(result) {
        //     tmp = result;
        //     data = tmp.map(function(data) {
        //         return setData(data);
        //     })
        // });
        // data = defaultData.map(function(data) {
        //     return setDatas(data);
        // });
		switch (routerL) {
			case "/":
				requestNew();
				break;
			case "/oldHouse":
				requestAll();
				break;
			case "/userManage/userManage.saleRecord":
				requestRecord();
				break;
			case "/userManage/userManage.save":
				requestSave();
				break;
			default:

		}

		function requestNew() {
			$http.get("/oldHouse/new")
			.success(function(result) {
				tmp = result;
				data3 = tmp.map(function(data) {
					return setDatas($.extend(true,{},data));
				});
				if(data3.length == 0) {
					data3 = defaultData.map(function(data) {
						return setDatas($.extend(true,{},data));
					});
				}
				$state.go('home', {}, {
				  reload: true
				});
			})
			.error(function(err) {
				console.log(err);
				console.log(data);
				data = defaultData.map(function(data) {
					return setDatas($.extend(true,{},data));
				});
				$state.go('home', {}, {
				  reload: true
				});
			});
		}

		function requestSave() {
			var id = user.getUserId();
			var str = $.param({userId: id});
			$http.post('/houseSave', str, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			.success(function(result) {
				tmp = result;
				data2 = tmp.map(function(data) {
					return setDatas($.extend(true,{},data));
				});
				// if(data2.length == 0) {
				// 	data2 = defaultData.map(function(data) {
				// 		return setDatas($.extend(true,{},data));
				// 	});
				// }
				$state.go('userManage.save', {}, {
				  reload: true
				});
			})
			.error(function(err) {
				console.log(err);
				console.log(data);
				data2 = defaultData.map(function(data) {
					return setDatas($.extend(true,{},data));
				});
				$state.go('userManage.save', {}, {
				  reload: true
				});
			});
		}

		function requestRecord() {
			var id = user.getUserId();
			var str = $.param({userId: id});
			$http.post('/saleRecord', str, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			.success(function(result) {
				tmp = result;
				data = tmp.map(function(data) {
					return setDatas($.extend(true,{},data));
				});
				// if(data.length == 0) {
				// 	data = defaultData.map(function(data) {
				// 		return setDatas($.extend(true,{},data));
				// 	});
				// }
				$state.go('userManage.saleRecord', {}, {
				  reload: true
				});
			})
			.error(function(err) {
				console.log(err);
				console.log(data);
				data = defaultData.map(function(data) {
					return setDatas($.extend(true,{},data));
				});
				$state.go('userManage.saleRecord', {}, {
				  reload: true
				});
			});
		}

        function requestAll() {
            $http.get("/oldHouse")
            .success(function(result) {
                tmp = result;
                data = tmp.map(function(data) {
                    return setDatas($.extend(true,{},data));
                });
                if(data.length == 0) {
                    data = defaultData.map(function(data) {
                        return setDatas($.extend(true,{},data));
                    });
                }
                $state.go('oldHouse', {}, {
                  reload: true
                });
            })
            .error(function(err) {
                console.log(err);
                console.log(data);
                data = defaultData.map(function(data) {
                    return setDatas($.extend(true,{},data));
                });
                $state.go('oldHouse', {}, {
                  reload: true
                });
            });
        }

		function requestCate(type) {
			var str = $.param({type: type});
			$http.post('/oldHouse', str, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			.success(function(result) {
				tmp = result;
				data = tmp.map(function(data) {
					return setDatas($.extend(true,{},data));
				});
				if(data.length == 0) {
					data = defaultData.map(function(data) {
						return setDatas($.extend(true,{},data));
					});
				}
				$state.go('oldHouse', {}, {
				  reload: true
				});
			})
			.error(function(err) {
				console.log(err);
				console.log(data);
				data = defaultData.map(function(data) {
					return setDatas($.extend(true,{},data));
				});
				$state.go('oldHouse', {}, {
				  reload: true
				});
			});
		}

		return {
			getData: function() {
                    // requestAll();
				return data;
			},
			getData2: function() {
				return data2;
			},
			getData3: function() {
				return data3;
			},
            setData: function(objArr) {
                data = $.extend(true, {}, objArr);
            },
			getSearchKey: function() {
				return searchKey;
			},
			setSearchKey: function(key) {
				searchKey = key;
			},
			getDefaultData: function() {
				return defaultData.map(function(item) {
					return setDatas($.extend(true, {}, item));
				});
			},
			requestCateData: requestCate,
            requestAllData: requestAll,
			requestRecordData: requestRecord,
			requestSaveData: requestSave,
			requestNewData: requestNew
		}

		function setDatas(tmp) {
            console.log(tmp);
            console.log(tmp.houseAddress);
			var addressArr = tmp.houseAddress.detail.split(" ");
            console.log("1---");
            console.log(tmp.houseAbout.born);
            console.log(tmp);
            var allPrice = +tmp.houseAbout.allPrice;
            var size = +tmp.houseAbout.size;
            var id = "GZFY000000000" + tmp.oldHouseId;
            var dateArr = tmp.houseAbout.born.split(" ");
			var reg = /\d{1,4}(?=(\d{4})+$)/g;
            var telStr = tmp.owner.tel;
			if (reg.test(telStr)) {
				telStr = telStr.replace(reg, function(s) {
                    return s + " ";
                });
			}
			tmp.houseAddress.floor = tmp.houseAddress.floors.heightType + " /" + tmp.houseAddress.floors.floor + "层";
            tmp.houseAbout.roomC = tmp.houseAbout.roomC.bedR + "室" + tmp.houseAbout.roomC.livingR + "厅" + tmp.houseAbout.roomC.restR + "卫";
            tmp.id = id;
            tmp.houseAbout.avgPrice = ((allPrice * 10000) / size).toFixed(2);
            tmp.houseAbout.firstPay = (+(allPrice * 0.3)).toFixed(2);
            tmp.houseAbout.monthPay = ((allPrice * 0.7 * 10000) / (30 * 12)).toFixed(2);
            tmp.houseAbout.born = dateArr[3];
			tmp.houseAddress.province = addressArr[0];
			tmp.houseAddress.city = addressArr[1];
			tmp.houseAddress.area = addressArr[2];
			tmp.houseAddress.road = addressArr[3];
			tmp.owner.tel = telStr;
			tmp.otherMsg.aroundSchool = tmp.houseAddress.city + "市" + tmp.houseAddress.area + "区" + "西丽小学";
            tmp.houseAddress.details = tmp.houseAddress.city + "市" + tmp.houseAddress.area + tmp.houseAddress.road + tmp.houseAddress.community + tmp.houseAddress.buildingBlock + "栋" + tmp.houseAddress.floors.floor + "层" + tmp.houseAddress.roomN + "号单元";
			tmp.traffic = tmp.houseAddress.community + "的交通便利，出行方便，居家旅行必备小区";
			tmp.surroundings = tmp.houseAddress.community + "周围有医院，银行，运动场，生活配置十分齐全";
			tmp.houseAbout.size = toFloat(tmp.houseAbout.size);
			tmp.houseAbout.allPrice = toFloat(tmp.houseAbout.allPrice);
			tmp.houseAbout.avgPrice = toFloat(tmp.houseAbout.avgPrice);

            console.log(tmp);
            return tmp;

			function toFloat(num) {
				return parseFloat(num);
			}
		}
	}

})();
