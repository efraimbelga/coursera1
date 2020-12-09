(function(){
	'use strict';

	angular.module('assignmentApp', [])

	.controller('assignmentController', assignmentController);

	assignmentController.$inject = ['$scope'];
	function assignmentController($scope){
		$scope.meals = "";
		$scope.stateofbeing = "";


		$scope.checkMeal = function(){
			$scope.stateofbeing = getresult($scope.meals);
		};

		function getresult(string){
			var totalMeal = 0;
			var res = string.split(",");
			var message = "";

			if(res.length > 0){

			}else{
				message = ""
			}
			for(var i= 0; i<string.length; i++){
				totalStringValue += string.charCodeAt(i);
			}
			return message;
		}
	}
	
})();
