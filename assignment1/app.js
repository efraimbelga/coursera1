(function(){
	'use strict';

	angular.module('assignmentApp', [])

	.controller('assignmentController', assignmentController);

	assignmentController.$inject = ['$scope'];
	function assignmentController($scope){
		$scope.meals = "";
		$scope.stateofbeing = "";
		

		$scope.checkMeal = function(){
			var message = "";
			var blank = 0;
			var meal = $scope.meals;
			meal = meal.replace(/,\s*$/, "");
			var food = removeComma(meal);
			if(food === ""){
				message= "Please enter data first";
			}else{
				var foods = meal.split(",");
				for (var i = 0; i < foods.length; i++) {
				  	food = removeComma(foods[i]);
				  	if(food === ""){
				  		blank++;
				  		message = 'Empty';
				  		break;
				  	}
				}
				if(blank<=0){
					if(foods.length > 3){
						message = 'Too much!';
					}else{
						message = "Enjoy!"
					}
				}			
			}			
			$scope.stateofbeing = message;
		};

		function removeComma(string){
			var str = string.replace(/\s/g, '');
			return str;
		}
	}
	
})();
