(function () {
'use strict';

var fruits = [
    {
      name: "Banana",
      quantity: "100"
    },
    {
      name: "Watermelon",
      quantity: "20"
    },
    {
      name: "Apple",
      quantity: "50"
    },
    {
      name: "Rambutan",
      quantity: "5"
    },
    {
      name: "Durian",
      quantity: "10"
    },
    {
      name: "Papaya",
      quantity: "30"
    },
    {
      name: "Buko",
      quantity: "15"
    },
    {
      name: "Grapes",
      quantity: "500"
    },
    {
      name: "Pomelo",
      quantity: "25"
    }
];

var boughtlist = [];


angular.module('ShoppingListApp', [])
.controller('ShowFruitsController', ShowFruitsController)
.service('ShoppingListService', ShoppingListService);

ShowFruitsController.$inject = ['ShoppingListService'];
function ShowFruitsController(ShoppingListService) {
    var showList = this;
    showList.items = fruits;
    showList.boughtitems = boughtlist;
    showList.errorMessage = "Nothing bought yet";

    showList.removeItem = function (itemIndex) {
        try {
            showList.errorMessage = "";
            ShoppingListService.addItem(itemIndex);
            ShoppingListService.removeItem(itemIndex);
        } catch (error) {
            showList.errorMessage2 = error.message;
        }
    };
}

function ShoppingListService() {
    var service = this;    
    var tobuy = fruits;  
    var boughtitems = boughtlist;

    service.removeItem = function (itemIndex) {
        tobuy.splice(itemIndex, 1);
        if(tobuy.length== 0){
            throw new Error("Everything is bought!");
        }
    };

    service.addItem = function (itemIndex){
        var bought = {
            name: tobuy[itemIndex].name,
            quantity: tobuy[itemIndex].quantity
        };
        console.log(bought)
        boughtitems.push(bought);
    };
}

})();
