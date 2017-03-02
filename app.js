angular.module('app', ['ui.grid'])
.controller('mainController', function($scope, dataFactory) {
    $scope.title = "Angular UI-grid tests";
    $scope.gridData = dataFactory.getGridData();
    
})