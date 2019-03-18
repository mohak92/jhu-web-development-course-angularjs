(function(){
"use strict";

angular.module('public')
.controller('NewsletterController', NewsletterController);

NewsletterController.$inject = ['UserInformationService', 'MenuService'];
function NewsletterController(UserInformationService, MenuService) {
  var newsletterCtrl = this;
  newsletterCtrl.completed = false;

  newsletterCtrl.submit = function () {
    MenuService.getMenuItem(newsletterCtrl.favoriteDish).then(function(item){
      UserInformationService.setUser({
        firstName: newsletterCtrl.firstName,
        lastName: newsletterCtrl.lastName,
        email: newsletterCtrl.emailAddress,
        phone: newsletterCtrl.phoneNumber,
        favoriteDish: item
      });
      newsletterCtrl.completed = true;
    });
  };
}

})();
