(function() {
    'use strict';

    angular
        .module('RWMF')
        .controller('ProgramDetailController', ProgramDetailController)
        .filter('trusted', ['$sce', function($sce) {
            return function(url) {
                url = url.replace("/watch", "/embed");
                return $sce.trustAsResourceUrl(url);
            };
        }]);
    ProgramDetailController.$inject = ['$rootScope', 'CoreService', '$state', '$stateParams'];

    function ProgramDetailController($rootScope, CoreService, $state, $stateParams) {
        var vm = this;
        $rootScope.pageName = "home";
        $rootScope.isLoading = true;
        CoreService.getProgramDetails($stateParams.program_id).then(function(res) {
            vm.programDetail = res.data.programme_data;
            $rootScope.isLoading = false;
        }, function(res) {
            $rootScope.isLoading = false;
        }).catch(function() {
            $rootScope.isLoading = false;
        });
    }

})();