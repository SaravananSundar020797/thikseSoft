var app = angular.module('businessApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "home.html",
        controller: "HomeController"
    })
    .when("/artificialIntelligence", {
        templateUrl: "artificialIntelligence.html",
        controller: "ArtificialIntelligenceController"
    })
    .when("/data", {
        templateUrl: "data.html",
        controller: "DataController"
    })
    .when("/automation", {
        templateUrl: "automation.html",
        controller: "AutomationController"
    })
    .when("/contact", {
        templateUrl: "contact.html",
        controller: "ContactController"
    })
    .otherwise({
        redirectTo: "/"
    });
});

