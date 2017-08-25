(function(){
	'use strict';
	angular.module('app.home')
		.factory('homeService', ['$http',function($http){
			return{
				isLogined:function(url){
					return $http.post(url);
				}
			};
		}])
})();