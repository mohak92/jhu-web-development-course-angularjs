(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$injector = ['categories']
  function CategoriesController(categories){
    var categoriesList = this;
    
    categoriesList.categories = categories;
  }

})();
