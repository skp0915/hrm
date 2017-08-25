(function(){
	'use strict';
	angular.module('app.home')
		.controller('HomeController', ['$scope','$window','homeService','userService', function($scope,$window,homeService,userService){
			//验证用户有没有登录，如果没有登录，跳转到登录页面
			var url = "http://192.168.0.100/hrm/isLogined";
			var promise = homeService.isLogined(url);
			promise.then(function(res){
				if(res.data.status=="ok"){
					$scope.user=res.data.user;
					
				}else{
					$window.location="/"
				}
			},function(res){

			})
			//home页面的控制器逻辑
			//加入这儿是userController
			var url = "http://192.168.0.100/hrm/user/list";
			$scope.pageIndex=1;
			$scope.offset=10;
			var params = {
				pageIndex:$scope.pageIndex,
				offset:$scope.offset
			}
			var promise=userService.getList(url,params);
			promise.then(function(res){
				$scope.users=res.data.users;
				$scope.totalPage=Math.ceil(res.data.total/$scope.offset);
			},function(res){

			})
			//处理分页信息
			$scope.handlePage=function(pageNum){
				$scope.pageIndex=$scope.pageIndex+pageNum;
				if($scope.pageIndex<1){
					$scope.pageIndex=1;
				}
				console.log($scope.totalPage);
				if($scope.pageIndex>$scope.totalPage){
					$scope.pageIndex=$scope.totalPage;
				}
				var params = {
					pageIndex:$scope.pageIndex,
					offset:$scope.offset
				}
				var promise=userService.getList(url,params);
					promise.then(function(res){
					$scope.users=res.data.users;
				},function(res){

				})
			}
		}])
})();