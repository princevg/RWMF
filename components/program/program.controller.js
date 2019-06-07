(function() {
    'use strict';

    angular
        .module('RWMF')
        .controller('ProgramController', ProgramController);
    ProgramController.$inject = ['$rootScope'];

    function ProgramController($rootScope) {
        var vm = this;
        $rootScope.pageName = "home";

    }

})();