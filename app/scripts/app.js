'use strict';

/**
 * @ngdoc overview
 * @name paydemoApp
 * @description
 * # paydemoApp
 *
 * Main module of the application.
 */
angular
  .module('paydemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/thankyou.html', {
        templateUrl: 'views/thankyou.html',
        controller: 'ThankYouCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      // if(window.history && window.history.pushState){
      //   console.log('Its working');
      //   $locationProvider.html5Mode(true);
      // }
  })
  .run(function ($rootScope) {
    /* change these if needed */
    $rootScope.demotitle = 'Glome Paywall Demo';
    $rootScope.gbs = 'https://gbs.local';
    $rootScope.payment_url = $rootScope.gbs + '/paywall/2-glome-paywall-demo';
    /* ^^^^^^^^^^^^ */
    $rootScope.vault_base = $rootScope.gbs + '/v';
  });
