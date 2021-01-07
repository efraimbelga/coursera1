(function(){
	'use strict';

	angular.module('httpserviceApp', [])
	.controller('MenuCategoriesController', MenuCategoriesController)
	.service('MenuCategoriesService', MenuCategoriesService);

	MenuCategoriesController.$inject = ['MenuCategoriesService'];
	function MenuCategoriesController(MenuCategoriesService){
		var menu = this;

		var promise = MenuCategoriesService.getMenuCategories();

		promise.then(function(response){
			menu.categories = response.data;
		})
		.catch(function(error){
			console.log("Error")
		})
	}

	MenuCategoriesService.$inject = ['$http']
	function MenuCategoriesService($http){
		var service = this;

		serive.getMenuCategories = function(){
			var response = $http({
				method : "GET",
				url: ("http://davids-restaurant.herokuapp.com/categories.json")
			});

			return response;
		}
	}
})();

