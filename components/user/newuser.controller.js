(function() {
    'use strict';

    angular
        .module('RWMF')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['CoreService', '$state', '$rootScope', 'FlashService'];

    function RegisterController(CoreService, $state, $rootScope, FlashService) {
        var vm = this;
        vm.user = {};
        $rootScope.pageName = "login";
        vm.register = register;
        vm.cancel = cancel;

        function register() {
            vm.dataLoading = true;
            CoreService.createUser(vm.user)
                .then(function(response) {
                    if (response.status == 200) {
                        FlashService.Success(response.data.display, true);
                        $state.go('login');
                    } else {
                        FlashService.Error(response.data.display);
                        vm.dataLoading = false;
                    }
                }, function(err) {
                    FlashService.Error(err.data.display);
                }).catch(function(err) {

                });
        }

        function cancel() {
            vm.user = {};
            vm.userReg.$setPristine();
        }
    }

})();