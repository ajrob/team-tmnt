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
    		// return [
	    	// 	{
	    	// 		"id": 1, 
	    	// 		"name": "Turtles", 
	    	// 		"characters": [
		    // 			{
		    // 				"id": 4, 
		    // 				"name": "Donatello"
		    // 			}, 
		    // 			{
		    // 				"id": 2, 
		    // 				"name": "Leonardo"
		    // 			}, 
		    // 			{
		    // 				"id": 1, 
		    // 				"name": "Michaelangelo"
		    // 			}, 
		    // 			{
		    // 				"id": 3, 
		    // 				"name": "Raphael"
		    // 			}
	    	// 		]
	    	// 	}
    		// ];
    	}
	}
  });
