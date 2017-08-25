(function(){
	'use strict';
	//提供登录服务
	angular.module('app.login')
		.factory('loginService', ['$http',function($http){
			return{
				login:function(url,params){
					var promise = $http.post(url,params);
					return promise;
				}
			};
		}])
})();

