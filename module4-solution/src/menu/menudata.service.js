(function(){
  'use stricit';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

  MenuDataService.$injector = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath){
    var service = this;

    /**
     * This method should return a promise which is a result of using the $http service
     * REST API endpoint: categories.json
     */
    service.getAllCategories = function(){
      return $http({
        url: (ApiBasePath + '/categories.json')
      }).then(function(result){
        return result.data;
      });
    };

    /**
     * This method should return a promise which is a result of using the $http service,
     * REST API endpoint: menu_items.json?category=,
     */
    service.getItemsForCategory = function(categoryShortName){
      return $http({
        url: (ApiBasePath + '/menu_items.json'),
        params: {category: categoryShortName}
      }).then(function(result){
        return result.data;
      });;
    };

  }
})();
