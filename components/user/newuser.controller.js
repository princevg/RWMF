(function() {
    'use strict';

    angular
        .module('RWMF')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['CoreService', '$state', '$rootScope', 'FlashService', '$timeout'];

    function RegisterController(CoreService, $state, $rootScope, FlashService, $timeout) {
        var vm = this;
        $rootScope.pageName = "login";
        vm.register = register;

        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function(response) {
                    if (response.status == 200) {
                        FlashService.Success(response.data.display, true);
                        FlashService.clearFlashMessageOntimeout(8000);
                        $state.go('login');
                    } else {
                        FlashService.Error(response.data.display);
                        FlashService.clearFlashMessageOntimeout(8000);
                    }
                }, function(err) {
                    FlashService.Error(err.data.display);
                    FlashService.clearFlashMessageOntimeout(8000);
                }).catch(function(err) {
                    FlashService.Error(err.data.display);
                    FlashService.clearFlashMessageOntimeout(8000);
                });
        }
    }

})();