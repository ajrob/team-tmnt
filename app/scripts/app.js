'use strict';

var myApp = angular.module('teamTmntApp', ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'			
		})
		.state('team', {
			url: '/team/:teamId',
			templateUrl: 'views/team.html',
			controller: 'TeamCtrl',
			resolve: {
				team: function($stateParams, Turtle){
					return Turtle.getTeam($stateParams.teamId);
				}
			}
		});
});
