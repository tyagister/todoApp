var app = angular.module('todo', []);
app.run(function($rootScope){
    $rootScope.title = 'To Do Application';
})
app.controller('todoController',['$scope', '$log', function($scope, $log){
    $scope.data = ['Shopping','Hanging','Reading']
    $scope.add = function(){
       if(event.which == 13){
            $scope.data.push($scope.todoInput);
            $scope.todoInput = ' ';
        }
    };
    
    $scope.delete = function($index){
       $scope.data.splice($index, 1)
    }
}]);