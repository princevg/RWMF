(function() {
    'use strict';

    angular
        .module('RWMF')
        .controller('GeneralController', GeneralController);
    GeneralController.$inject = ['$rootScope', 'CoreService'];

    function GeneralController($rootScope, CoreService) {
        var vm = this;
        $rootScope.pageName = "home";
        CoreService.getBusScheduleDetails().then(function(res) {
            vm.busSchedule = res.data.bus_schedule.schedule;
        }, function() {}).catch(function() {})
        vm.busSchedule
    }

})();