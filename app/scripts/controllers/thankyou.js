'use strict';

/**
 * @ngdoc function
 * @name paydemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paydemoApp
 */
angular.module('paydemoApp')
  .controller('ThankYouCtrl', function ($rootScope, $scope, $routeParams) {
    $scope.vault_url = $rootScope.vault_base + '/' + $routeParams.v;
  });