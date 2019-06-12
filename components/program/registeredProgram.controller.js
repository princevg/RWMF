(function() {
    'use strict';

    angular
        .module('RWMF')
        .controller('ProgramController', ProgramController);
    ProgramController.$inject = ['$rootScope', 'CoreService'];

    function ProgramController($rootScope, CoreService) {
        var vm = this;
        $rootScope.pageName = "home";
        CoreService.getAllRegisteredProgrammes(localStorage['userToken']).then(function(response) {
            vm.programmes = response.data;
        }, function(err) {

        }).catch(function(err) {

        })
    }

})();