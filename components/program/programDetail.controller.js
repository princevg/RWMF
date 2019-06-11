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
            vm.programDetail = { "id": "4", "name": "ALUNAN KERONCONG (Sarawak)", "code": "4", "day": "1", "date": "Jul 12 2019", "time": "05:00 pm", "type": "1", "type_name": "Event", "image": "https://rwmf.estrradodemo.com/admin/uploads/programme_image/programme_4.png?1560253137", "stage": "5", "stage_name": "Big Tent Stage", "stage_location": "Sarawak Cultural Villag", "stage_latitude": "1.750668211939595", "stage_longitude": "110.31431078910828", "description": "ALUNAN KERONCONG (Sarawak)", "status": "1", "image_name": "programme_4", "gallery": [], "register_status": "0" }
            $rootScope.isLoading = false;
        }).catch(function() {
            $rootScope.isLoading = false;
        });
    }

})();