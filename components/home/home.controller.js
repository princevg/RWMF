(function() {
    'use strict';

    angular
        .module('RWMF')
        .controller('HomeController', HomeController)
        .filter('filterWithDay', function() {
            return function(items, day) {
                if (items.length > 0) {
                    var filtered = [];
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if (items[i].day === day) {
                            filtered.push(item);
                        }
                    }
                    return filtered;
                }
            };
        });

    HomeController.$inject = ['$rootScope', 'CoreService'];

    function HomeController($rootScope, CoreService) {
        var vm = this;
        vm.day = "1";
        vm.events = [];
        $rootScope.pageName = "home";
        vm.checkboxChecked = checkboxChecked;
        CoreService.getAllEvents().then(function(res) {
            vm.events = res.data.programme_list;
        });

        function checkboxChecked($event) {
            vm.day = $event.currentTarget.firstElementChild.value;
        }
    }

})();