'use strict';

/**
 * @ngdoc function
 * @name paydemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paydemoApp
 */
angular.module('paydemoApp')
  .controller('MainCtrl', function ($rootScope, $scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
