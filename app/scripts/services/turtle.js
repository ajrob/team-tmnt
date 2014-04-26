'use strict';

angular.module('teamTmntApp')
  .service('Turtle', function Turtle($http, $q) {
    return {
    	getTeams: function(){
    		var deferred = $q.defer();
    		$http({method: 'GET', url: 'http://tmnt.devmounta.in/team'})
    			.success(function(data){
    				deferred.resolve(data);
    			});
    		return deferred.promise;
    	},
    	getTeam: function(teamId){
			var deferred = $q.defer();
    		$http({method: 'GET', url: 'http://tmnt.devmounta.in/team/'+teamId})
    			.success(function(data){
    				if(Array.isArray(data)){
    					deferred.resolve(data[0]);
    				} else {
	    				deferred.resolve(data);
    				}
    			});
    		return deferred.promise;
    	},
    	getCharacter: function(charId){
    		var deferred = $q.defer();
    		$http({ method: 'GET', url: 'http://tmnt.devmounta.in/character/'+charId})
    			.success(function(data){
    				if(Array.isArray(data)){
    					deferred.resolve(data[0])
    				} else {
    					deferred.resolve(data);
    				}
    			});
    		return deferred.promise;
    	}
	}
  });
