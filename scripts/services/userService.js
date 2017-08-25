(function(){
	'use strict';
	angular.module('app.home')
		.factory('userService', ['$http', function($http){
			return{
				getList:function(url,params){
					return $http.get(url,{
						params:params
					});
				}
			};
		}])
})();