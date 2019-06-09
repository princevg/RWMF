(function() {
    'use strict';

    angular
        .module('RWMF', ['ui.router', 'ngCookies', 'ngMap'])
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'innerPages': {
                        controller: 'HomeController',
                        templateUrl: 'components/home/home.html',
                        controllerAs: 'homectrl'
                    },
                    'header': {
                        controller: 'HeaderController',
                        templateUrl: 'components/header/header.html',
                        controllerAs: 'headerctrl'
                    }
                }
            }).state('registeredPgm', {
                url: '/registeredPgm',
                views: {
                    'innerPages': {
                        controller: 'ProgramController',
                        templateUrl: 'components/program/registeredProgram.html',
                        controllerAs: 'pgmctrl'
                    },
                    'header': {
                        controller: 'HeaderController',
                        templateUrl: 'components/header/header.html',
                        controllerAs: 'headerctrl'
                    }
                }
            }).state('ticketInfo', {
                url: '/ticketInfo',
                views: {
                    'innerPages': {
                        controller: 'GeneralController',
                        templateUrl: 'components/general/ticketInfo.html',
                        controllerAs: 'genctrl'
                    },
                    'header': {
                        controller: 'HeaderController',
                        templateUrl: 'components/header/header.html',
                        controllerAs: 'headerctrl'
                    }
                }
            }).state('venueLocator', {
                url: '/venueLocator',
                views: {
                    'innerPages': {
                        controller: 'VenueController',
                        templateUrl: 'components/general/venueLocator.html',
                        controllerAs: 'venCtrl'
                    },
                    'header': {
                        controller: 'HeaderController',
                        templateUrl: 'components/header/header.html',
                        controllerAs: 'headerctrl'
                    }
                }
            })

        .state('login', {
            url: '/login',
            views: {
                'login@': {
                    controller: 'LoginController',
                    templateUrl: 'components/user/login.html',
                    controllerAs: 'loginctrl'
                }
            }

        })

        .state('register', {
            url: '/register',
            views: {
                'login@': {
                    controller: 'RegisterController',
                    templateUrl: 'components/user/register.html',
                    controllerAs: 'vm'
                }
            }
        })

        .state('forgot', {
            url: '/forgot',
            views: {
                'login@': {
                    controller: 'ForgotController',
                    templateUrl: 'components/user/forgot.html',
                    controllerAs: 'vm'
                }
            }
        })

        .state('dashboard', {
            url: '/dashboard',
            views: {
                'innerPages@': {
                    controller: 'DashController',
                    templateUrl: 'components/dashboard/dashboard.html',
                    controllerAs: 'vm'
                },
                'header@': {
                    controller: 'HeaderController',
                    templateUrl: 'components/header/header.html',
                    controllerAs: 'vm'
                }
            }
        })
        $urlRouterProvider.otherwise('/home');
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];

    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $(".button-collapse").sideNav();
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function(event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register', '/forgot']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            // if (restrictedPage && !loggedIn) {
            //     $location.path('/login');
            // }
        });
    }

})();