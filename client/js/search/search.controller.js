angular.module('search.controller', [])
    .directive('showDisplay', function(){
        return{
            restrict: 'EA',
            scope: {
                shows: '='
            },
            templateUrl: '../views/showDisplay.html'
        }
    })
	.controller('SearchController', function ($scope, searchService) {

		$scope.searchMaze = function () {
			//console.log("$scope.show");
			//console.log($scope.show);

			searchService.get({
				type: '/search/shows?q=',
				show: $scope.show
			}, function (response) {
				$scope.search = JSON.parse(response.text);
				console.log($scope.search[0].show.genres);
				for(var i=0; i<$scope.search.length; i++){
					$scope.search[i].show.summary = $scope.search[i].show.summary;
				}
				console.log($scope.search);
			});	

		};

});