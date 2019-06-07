(function() {
    'use strict';

    angular
        .module('RWMF')
        .controller('GeneralController', GeneralController);
    GeneralController.$inject = ['$rootScope'];

    function GeneralController($rootScope) {
        var vm = this;
        $rootScope.pageName = "home";

    }

})();