'use strict';

var myApp = angular.module('teamTmntApp', ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'views/main.html',
			controller: 'MainCtrl',
			resolve: {
				teams: function(Turtle){
					return Turtle.getTeams();
				}
			}		
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
		})
			.state('team.character', {
				url: '/character/:charId',
				templateUrl: 'views/team.character.html',
				controller: 'CharacterCtrl',
				resolve: {
					character: function($stateParams, Turtle){
						return Turtle.getCharacter($stateParams.charId);
					}
				}
			});
});
