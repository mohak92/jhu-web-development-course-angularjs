(function(){
  'use strict';

  angular.module('MenuApp')
  .component('itemsList', {
    templateUrl: 'src/menu/templates/items-list.template.html',
    bindings: {
      'items': '<'
    }
  });

})();
