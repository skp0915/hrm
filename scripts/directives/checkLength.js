!function(){"use strict";angular.module("app.login").directive("checkLength",[function(){return{scope:{minLength:"@",maxLength:"@"},require:"?ngModel",link:function(n,e,t,i){i&&i.$parsers.unshift(function(e){return e.length>=n.minLength&&n.maxLength<=20?(i.$setValidity("checkLength",!0),e):void i.$setValidity("checkLength",!1)})}}}])}();