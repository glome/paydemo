'use strict';

/**
 * @ngdoc function
 * @name paydemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paydemoApp
 */
angular.module('paydemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


angular.module('paydemoApp')
  .controller('ThankYouCtrl', function ($scope) {
    $scope.test = 'TestValue';
  });