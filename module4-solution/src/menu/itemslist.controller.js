(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsListController', ItemsListController);

  ItemsListController.$injector = ['items']
  function ItemsListController(items){
    var itemsList = this;

    itemsList.items = items.menu_items;
  }

})();
