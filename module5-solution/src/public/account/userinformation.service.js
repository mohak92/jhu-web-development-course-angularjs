(function(){
"use strict";


angular.module('common')
.service('UserInformationService', UserInformationService);

function UserInformationService() {
  var service = this;
  service.userAccount = {};
  service.registered = false;

  service.setUser = function(user){
    service.userAccount.firstName = user.firstName;
    service.userAccount.lastName = user.lastName;
    service.userAccount.name = user.firstName + ' ' + user.lastName;
    service.userAccount.email = user.email;
    service.userAccount.phone = user.phone;
    service.userAccount.favoriteDish = user.favoriteDish;

    service.registered = true;
  };

  service.getUser = function(){
    return service.userAccount;
  };

  service.userRegistered = function(){
    return service.registered;
  };
}

})();
