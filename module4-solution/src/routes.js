(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$injector = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/menu/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menu/templates/categories-container.template.html',
      controller: 'CategoriesController as categoriesList',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('categories.items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/menu/templates/items-container.template.html',
      controller: 'ItemsListController as itemsList',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    })
  }

})();
