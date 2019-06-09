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
                        item.time = convert12to24(item.time);
                        if (items[i].day === day) {
                            filtered.push(item);
                        }
                    }
                    return filtered;
                }
            };
        });

    HomeController.$inject = ['$rootScope', 'CoreService'];

    function convert12to24(time) {
        var hrs = Number(time.match(/^(\d+)/)[1]);
        var mnts = Number(time.match(/:(\d+)/)[1]);
        time = time.toUpperCase();
        var format = time.indexOf("PM") > 0 ? "PM" : "AM";
        if (format == "PM" && hrs < 12) hrs = hrs + 12;
        if (format == "AM" && hrs == 12) hrs = hrs - 12;
        var hours = hrs.toString();
        var minutes = mnts.toString();
        if (hrs < 10) hours = "0" + hours;
        if (mnts < 10) minutes = "0" + minutes;
        return hours + ":" + minutes;
    }

    function HomeController($rootScope, CoreService) {
        var vm = this;
        vm.day = "1";
        vm.events = [];
        $rootScope.pageName = "home";
        vm.checkboxChecked = checkboxChecked;
        CoreService.getAllEvents().then(function(res) {
            vm.events = res.data.programme_list;
        }, function(err) {

        }).catch(function(error) {
            console.log(error)
        });

        function checkboxChecked($event) {
            vm.day = $event.currentTarget.firstElementChild.value;
        }
    }

})();