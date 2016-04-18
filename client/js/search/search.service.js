angular.module('search.service', [])
	.factory('searchService', function ($resource) {
		console.log("hello you");
		return $resource('/api' );
	});