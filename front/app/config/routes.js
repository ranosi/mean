angular.module('primeiraApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/dashboard.html'
        }).state('billingCycles', {
            url: '/billing-cycles',
            templateUrl: 'billingCycle/tabs.html'
        });
        $urlRouterProvider.otherwise('/dashboard');
    }
]);