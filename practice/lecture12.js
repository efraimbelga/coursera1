(function(){
	'use strict';

	angular.module('myApp', [])

	.controller('FiltersController', FiltersController);

	FiltersController.$inject = ['$scope', '$filter'];
	function FiltersController($scope, $filter){
		$scope.name = "Tom Arvin";
		$scope.stateofbeing = "red";
		$scope.mealCost = .65;

		$scope.sayMessage = function(){
			var msg = "Haen ka na?";
			var output = $filter('uppercase')(msg);
			return output;
		}

		$scope.feedme = function(){
			$scope.stateofbeing = "green";
		};
	}
	
})();
