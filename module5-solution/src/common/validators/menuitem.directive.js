(function(){

angular.module('common')
.directive('menuItemValidator', MenuItemValidatorDirective);

MenuItemValidatorDirective.$inject = ['MenuService'];
function MenuItemValidatorDirective(MenuService){
  var ddo = {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {
      ngModel.$asyncValidators.invalidMenuItem = function(modelValue, viewValue) {
        var menuItem = viewValue;
        return MenuService.getMenuItem(menuItem);  
      }
    }
  };

  return ddo;
}

})();
