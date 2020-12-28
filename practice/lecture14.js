(function(){
	'use strict';

	angular.module('counterApp', [])

	.controller('CounterController', CounterController);

	CounterController.$inject = ['$scope'];
	function CounterController($scope){
		$scope.onceCounter = 0;
		$scope.counter = 0;
		$scope.myname = "Efraim";

		$scope.showNumberofWatchers = function(){
			console.log("Number of watchers: "+$scope.$$watchersCount)
		}

		$scope.countOnce = function (argument) {
			$scope.onceCounter = 1
		}

		$scope.upCounter = function(){
			$scope.counter ++;	
		}

		$scope.$watch(function(){
			console.log('Digest Loop fired!')
		})

		// $scope.$watch('onceCounter', function(newValue, oldValue){
		// 	console.log('Once Old: '+ oldValue)
		// 	console.log('Once New: '+ newValue)
		// })		

		// $scope.$watch('counter', function(newValue, oldValue){
		// 	console.log('Counter Old: '+ oldValue)
		// 	console.log('Counter New: '+ newValue)
		// })
	}

	
	
})();
