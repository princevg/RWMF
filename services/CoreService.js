(function(angular) {
    var CoreService = function($rootScope, CoreHttpRequest, $state, $http, $q, $timeout) {
        var service = this;

        service.login = function(data) {
            var deferred = $q.defer();
            var user = {};
            user.username = data.username;
            user.password = data.password;
            CoreHttpRequest.post("login", user)
                .then(function(response) {
                    if (response.status == 200) {
                        deferred.resolve(response.data);

                    }
                }, function(response) {
                    response.data = false;
                    deferred.reject(response.data);
                });
            return deferred.promise;
        };

        service.getAllEvents = function() {
            var deferred = $q.defer();
            CoreHttpRequest.post("dashboard")
                .then(function(response) {
                    if (response.status == 200) {
                        deferred.resolve(response.data);

                    }
                }, function(response) {
                    response.data = false;
                    deferred.reject(response.data);
                });
            return deferred.promise;
        }
        service.getBusScheduleDetails = function() {
            var deferred = $q.defer();
            CoreHttpRequest.post("busschedule")
                .then(function(response) {
                    if (response.status == 200) {
                        deferred.resolve(response.data);

                    }
                }, function(response) {
                    response.data = false;
                    deferred.reject(response.data);
                });
            return deferred.promise;
        }
        service.getProgramDetails = function(id) {
            var deferred = $q.defer();
            CoreHttpRequest.post("programme_detail", { programme_id: id })
                .then(function(response) {
                    if (response.status == 200) {
                        deferred.resolve(response.data);

                    }
                }, function(response) {
                    response.data = false;
                    deferred.reject(response.data);
                });
            return deferred.promise;
        }
        service.removeLoader = function() {
            $timeout(function() {
                $rootScope.isLoading = false;
            }, 1000);
        };
        service.addLoader = function() {
            $rootScope.isLoading = true;
        };
        service.recall = function() {
            $timeout(function() {
                if (document.createEvent) { // W3C
                    var ev = document.createEvent('Event');
                    ev.initEvent('resize', true, true);
                    window.dispatchEvent(ev);
                } else { // IE
                    element = document.documentElement;
                    var event = document.createEventObject();
                    element.fireEvent("onresize", event);
                }
            }, 3000);
        };
        service.isAuthenticated = function(item, data) {
            var isUserNameOk, isPasswordOk;
            for (var i = 0; i < data.length; i++) {
                isUserNameOk = false;
                isPasswordOk = false;
                for (var key in data[i]) {
                    if (item[key] == data[i][key]) {
                        if (key == "username")
                            isUserNameOk = true;
                        else if (key == "password")
                            isPasswordOk = true;
                    }
                }
                if (isUserNameOk && isPasswordOk) {
                    return true;
                }
            }
            return false;
        };
        service.activateSplash = function() {
            $rootScope.isSplashScreen = true;
            $timeout(function() {
                $rootScope.isSplashScreen = false;
            }, 3000)
        };

    };
    CoreService.$inject = ['$rootScope', 'CoreHttpRequest', '$state', '$http', '$q', '$timeout'];
    angular.module('RWMF')
        .service('CoreService', CoreService);
})(angular);