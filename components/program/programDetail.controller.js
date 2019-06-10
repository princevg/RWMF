(function() {
    'use strict';

    angular
        .module('RWMF')
        .controller('ProgramDetailController', ProgramDetailController);
    ProgramDetailController.$inject = ['$rootScope', 'CoreService', '$state', '$stateParams'];

    function ProgramDetailController($rootScope, CoreService, $state, $stateParams) {
        var vm = this;
        $rootScope.pageName = "home";
    }

})();