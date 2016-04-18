angular.module('show.controller',[])
    .controller('ShowController', function ($scope, show){
        $scope.showToSee = show;
        //access encaplulated data
        $scope.showToSee.$promise.then(function(data) {
       		for(var i =0; i<data.genres.length;i++){
        	if(i != show.genres.length -1)
        		$scope.genres += data.genres[i] + '|';
        	else
        		$scope.genres += data.genres[i] ;
        	}
        	//remove undefined because it is added before ajax fire
        	$scope.genres = $scope.genres.replace(/undefined/g, "");
   		});
        // console.log(dataOut);
        // console.log($scope.genres);
    });