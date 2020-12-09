(function(){
	'use strict';

	angular.module('myfirstApp', [])

	.controller('DIController', DIController);

	DIController.$inject = ['$scope', '$filter'];
	
	function DIController($scope, $filter){
		$scope.name = 'Kiams';

		$scope.upper = function(){
			var upCase = $filter('uppercase');
			$scope.name = upCase($scope.name)
		}

	}

	
})();

// !function(){"use strict";function e(e,n){e.name="Kiams",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("myfirstApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();