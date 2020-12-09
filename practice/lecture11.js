(function(){
	'use strict';

	angular.module('myApp', [])

	.controller('MsgController', MsgController);

	MsgController.$inject = ['$scope'];
	function MsgController($scope){
		$scope.name = "Tom Arvin";
		$scope.stateofbeing = "red";

		$scope.sayMessage = function(){
			return "Haen ka na?";
		}

		$scope.feedme = function(){
			$scope.stateofbeing = "green";
		};
	}
	
})();
