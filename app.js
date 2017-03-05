angular.module('app', ['ui.grid', 'ui.grid.edit'])
.controller('mainController', function($scope, dataFactory) {
    $scope.title = "Angular UI-grid tests";
    var faltdefinitioner = dataFactory.getFaltdefinitioner();
    var faltvarden = dataFactory.getFaltvarden();
    var altFaltvarden = dataFactory.getAltFaltvarden();

    var options = {};
    options.columnDefs = faltdefinitioner.map((def, index)=> {
        return {name: def.faltnamn, field: 'falt'+index};
    });
    options.data = faltvarden.map((faltvarde) => {
        var datacell = {};
        for (var i = 0; i < faltdefinitioner.length; i++) {
            datacell['falt'+i] = faltvarde[i];
        }
        return datacell;
    });

    $scope.gridOptions = options;

    var options = {};
    options.data = altFaltvarden.map((faltvarde) => {
        var datacell = {};
        for (var i = 0; i < faltdefinitioner.length; i++) {
            datacell[faltdefinitioner[i].faltnamn] = faltvarde[i];
        }
        return datacell;
    });

    $scope.altGridOptions = options;



});