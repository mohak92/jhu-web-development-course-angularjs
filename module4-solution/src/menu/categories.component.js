(function(){
  'use strict';

  angular.module('MenuApp')
  .component('categoriesList', {
    templateUrl: 'src/menu/templates/categories-list.template.html',
    bindings: {
      'items': '<'
    }
  });

})();
