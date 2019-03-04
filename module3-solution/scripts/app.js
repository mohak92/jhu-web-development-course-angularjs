(function(){
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

    NarrowItDownController.$injector = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var list = this;

        list.searchKey = "";
        list.found = [];

        list.search = function(){
            if (list.searchKey.length > 0) {

                list.errorMessage = "";
                var promise = MenuSearchService.getMatchedMenuItems(list.searchKey)
                promise.then(function(result){
                    list.found = result;
                    if (result.length === 0) {
                        list.errorMessage = "Nothing found";
                    }
                }).catch(function(){
                    console.log("Error!");
                });

            } else{
                list.errorMessage = "Nothing found";
            }
        };

        list.removeItem = function(indexItem){;
            list.found.splice(indexItem,1);
        };
    }

    MenuSearchService.$injector = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath){
        var service = this;

        service.getMatchedMenuItems = function(searchTerm){
            return $http({
                url: (ApiBasePath + '/menu_items.json')
            }).then(function (result) {
                var items = result.data.menu_items;
                var foundItems = [];

                for (var i = 0; i < items.length; i++) {
                    if (items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
                        foundItems.push(items[i]);
                    }
                }

                return foundItems;
            });
        };
    }

    function FoundItemsDirective(){
        var ddo = {
            templateUrl: "foundItems.html",
            restrict: 'E',
            scope: {
                items: '<foundItems',
                onRemove: '&'
            }
        };

        return ddo;
    }

})();
