(function () {
'use strict';

angular.module('MenuCategoriesApp', [])
.controller('MenuCategoriesController', MenuCategoriesController)
.service('MenuCategoriesService', MenuCategoriesService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuCategoriesController.$inject = ['MenuCategoriesService'];
function MenuCategoriesController(MenuCategoriesService) {
  var menu = this;


  menu.searchmenu = function () {
     menu.errormessage = "";
    var promise = MenuCategoriesService.getMenuForCategory();
    promise.then(function (response) {
        var categories = response.data 
        var foundmenu = [];
        for(var i = 0; i < categories.length; i++)
        {
          var str = angular.lowercase(categories[i].name);
          var key = angular.lowercase(menu.menukey)
          if(str.search(key) >= 0){
            var item = {
              name: categories[i].name,
              short_name: categories[i].short_name
            };
            foundmenu.push(item);
          }            
        }

        menu.categories = foundmenu;
        if(foundmenu.length <= 0){
            menu.errormessage = "Nothing Found"
        }
    })
    .catch(function (error) {
        console.log(error);
    })
  };


  menu.removeItem = function (itemIndex) {
      menu.errormessage = ""
      menu.categories.splice(itemIndex, 1);
      if(menu.categories.length<=0){
        menu.errormessage = "No more items"
      }
  };

}


MenuCategoriesService.$inject = ['$http', 'ApiBasePath'];
function MenuCategoriesService($http, ApiBasePath) {
  var service = this;

  service.getMenuForCategory = function () {
    var menus = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
    });

    return menus;
  };

}

})();
