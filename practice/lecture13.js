(function(){
	'use strict';

	angular.module('myApp', [])

	.controller('FiltersController', FiltersController)
	.filter('loves', changelikestoloves)
	.filter('truth', truthFilter);

	FiltersController.$inject = ['$scope', 'lovesFilter', '$filter'];
	function FiltersController($scope, lovesFilter, $filter){
		$scope.name = "Tom Arvin";
		$scope.stateofbeing = "red";
		$scope.mealCost = .65;

		$scope.sayMessage = function(){
			var msg = "Efraim likes snacks at night";
			var output = $filter('uppercase')(msg);
			return output;
		}

		$scope.changelikesMessage = function(){
			var msg = "Efraim likes snacks at night";
			var output = lovesFilter(msg);
			return output;
		}

		$scope.feedme = function(){
			$scope.stateofbeing = "green";
		};
	}

	function changelikestoloves(){
		return function(input){
			input = input || "";
			input = input.replace("likes", "loves");
			return input
		}
	}

	function truthFilter(){
		return function(input, target, replace){
			input = input || "";
			input = input.replace(target, replace);
			return input
		}
	}
	
})();
