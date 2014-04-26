'use strict';

angular.module('teamTmntApp')
  .directive('dvTable', function () {
    return {
      templateUrl: 'views/dv-table-template.html',
      restrict: 'A',
      scope: {
      	dvTable: '=',
      	dvTableHeaders: '='
      }
    };
  });
