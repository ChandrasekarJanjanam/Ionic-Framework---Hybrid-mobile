var app = angular.module("FirstApp", ["ionic"]);

app.constant('$ionicLoadingConfig', {
	  template: 'Default Loading Template...'
	});
app.controller("FirstAppCtrl", ["$scope", "$log", FirstAppCtrl]);

function FirstAppCtrl($scope, $log){
	$scope.refresh = function(){
		alert("Button pressed");
	}
}