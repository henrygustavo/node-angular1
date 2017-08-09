/* var applicationModule = angular.module("applicationModule", ["ngRoute"]);

applicationModule.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "app/components/home/homeView.html",
            controller: "homeController"
        })
        .otherwise({
            redirectTo: '/'
        });

}); */

var applicationModule = angular.module("applicationModule", ["ui.router"]);

applicationModule.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "app/components/home/homeView.html",
            controller: "homeController"

        })
});