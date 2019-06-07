(function() {
    'use strict';

    angular
        .module('app')
        .controller('ForgotController', ForgotController);
    ForgotController.$inject = ['UserService', '$rootScope'];

    function ForgotController(UserService, $rootScope) {
        var vm = this;
        console.log(vm);
    }

})();