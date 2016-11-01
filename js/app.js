angular.module('devmtnTravel', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
              url:'/',
              templateUrl: "../views/about.html"
            })
            .state('adventurers',{
              url:'/adventurers',
              templateUrl: '../views/about-adventurers.html'
            })
            .state('contact', {
              url: '/contact',
              templateUrl: '../views/contact.html'
            })
            .state('locations',{
              url: '/locations',
              templateUrl: '../views/locations.html',
              controller: 'locationsCtrl'
            })
            .state('packages',{
              url: '/packages',
              templateUrl: '../views/packages.html',
              controller: 'packagesCtrl'
            })
            .state('booked',{
              url: '/booked/:id',
              templateUrl: '../views/booked.html',
              controller: 'bookedCtrl'
            });

        $urlRouterProvider//this will make the default page home
            .otherwise('/');

    });//closing brackets
