(function(){
"use strict";

angular.module('public')
.controller('UserAccountController', UserAccountController);

UserAccountController.$inject = ['UserInformationService', 'ApiPath'];
function UserAccountController(UserInformationService, ApiPath) {
  var userAccountCtrl = this;
  userAccountCtrl.basePath = ApiPath;

  userAccountCtrl.registered = UserInformationService.userRegistered();
  if (userAccountCtrl.registered) {
    userAccountCtrl.user = UserInformationService.getUser();
  }


}

})();
