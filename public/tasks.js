var myApp = angular.module('myApp', []).filter('weDontLike', function(){
    
    return function(items, name){
        
        var arrayToReturn = [];
        //console.log(items);
        for (var key in items) {
           if(items[key]){
            arrayToReturn.push(key);
           }
        }
        return arrayToReturn;
    };
});



function TasksCtrl($scope,$http) {
 
	$scope.msgs=[];

	$scope.addShuo=function(msg){
		$scope.msgs.push(msg);

		$http.post("addShuo",{msg:msg}).
			success(function(data){
				$scope.msgs.push(msg);
		});
	};//End of add Shuo.............
}//END of TaskCrtl....

