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
            vm.events = [{ "id": "1", "name": "HA NOI DUO", "code": "1", "day": "1", "date": "Jul 12 2019", "time": "02:00 pm", "type": "1", "type_name": "Event", "image": "https://rwmf.estrradodemo.com/admin/uploads/programme_image/programme_1.png?1560044704", "stage": "1", "stage_name": "Theatre Stage" }, { "id": "2", "name": "MEHDI NASSOULI (Morocco)", "code": "2", "day": "1", "date": "Jul 12 2019", "time": "03:15 pm", "type": "1", "type_name": "Event", "image": "https://rwmf.estrradodemo.com/admin/uploads/programme_image/programme_2.png?1560044704", "stage": "1", "stage_name": "Theatre Stage" }, { "id": "3", "name": "TALISK (Scotland)", "code": "3", "day": "1", "date": "Jul 12 2019", "time": "04:30 pm", "type": "1", "type_name": "Event", "image": "https://rwmf.estrradodemo.com/admin/uploads/programme_image/programme_3.png?1560044704", "stage": "1", "stage_name": "Theatre Stage" }, { "id": "4", "name": "ALUNAN KERONCONG (Sarawak)", "code": "4", "day": "1", "date": "Jul 12 2019", "time": "05:00 pm", "type": "1", "type_name": "Event", "image": "https://rwmf.estrradodemo.com/admin/uploads/programme_image/programme_4.png?1560044704", "stage": "5", "stage_name": "Big Tent Stage" }, { "id": "5", "name": "BARROCK ETHNOCITY BAND (Sarawak)", "code": "5", "day": "1", "date": "Jul 12 2019", "time": "07:00 pm", "type": "1", "type_name": "Event", "image": "https://rwmf.estrradodemo.com/admin/uploads/programme_image/programme_5.png?1560044704", "stage": "5", "stage_name": "Big Tent Stage" }, { "id": "6", "name": "Raw and Ritual", "code": "6", "day": "1", "date": "Jul 12 2019", "time": "02:00 pm", "type": "1", "type_name": "Event", "image": "https://rwmf.estrradodemo.com/admin/uploads/programme_image/programme_6.png?1560044704", "stage": "4", "stage_name": "Indigenous Stage" }]
        }).catch(function(error) {
            console.log(error)
        });

        function checkboxChecked($event) {
            vm.day = $event.currentTarget.firstElementChild.value;
        }
    }

})();