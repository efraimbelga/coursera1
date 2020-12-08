(function(){
	'use strict';

	angular.module('myfirstApp', [])

	.controller('MyfirstController', function($scope){
		$scope.name="Efraim";
		$scope.sayHello = function(){
			return "Hello";
		}
	})

	.controller('NameCalculatorContoller', function($scope){
		$scope.name = "";
		$scope.totalValue = 0;
		$scope.displayNumeric = function(){
			var totalNameValue = calculateNumeric($scope.name);
			$scope.totalValue = totalNameValue;
		};


		function calculateNumeric(string){
			var totalStringValue = 0;
			for(var i= 0; i<string.length; i++){
				totalStringValue += string.charCodeAt(i);
			}
			return totalStringValue;
		}
	})

	.controller('DIController', DIController);

	function DIController($scope, $filter, $injector){
		$scope.name = 'Kiams';

		$scope.upper = function(){
			var upCase = $filter('uppercase');
			$scope.name = upCase($scope.name)
		}

		console.log($injector.annotate(DIController))

	}

	function AnnotateMe(name, job, blah){
		return "blah!";
	}

})();