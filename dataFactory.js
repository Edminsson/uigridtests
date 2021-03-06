angular.module('app')
.factory('dataFactory', function() {
    function getGridData() {
        return [
            { id: 1, name: 'Ethel Price', gender: 'female', company: 'Enersol'},
            { id: 2, name: 'Claudine Neal', gender: 'female', company: 'Sealoud'},
            { id: 3, name: 'Beryl Rice', gender: 'male', company: 'Velity'},
            { id: 4, name: 'Wilder Gonzales', gender: 'male', company: 'Geekko'},
            { id: 5, name: 'Georgina Schultz', gender: 'female', company: 'Suretech'},
            { id: 6, name: 'Carrol Buchanan', gender: 'male', company: 'Ecosys'},
        ];
    }
    function getFaltvarden() {
        return [
            ["Födelse", "", "Ramsele", "1778", "","","","", ""],
            ["Födelse", "", "Ramsele", "1779", "","","","", ""],
            ["Födelse", "", "Ramsele", "1780", "","","","", ""]
        ];
    }
    function getAltFaltvarden() {
        return [
            ["Födelse och vigsel", "", "Ramsele", "1778", "","","","", ""],
            ["Födelse och vigsel", "", "Ramsele", "1779", "","","","", ""],
            ["Födelse och vigsel", "", "Ramsele", "1780", "1781","","","", ""]
        ];
    }
    function getFaltdefinitioner() {
        return [
            {faltnamn: "Sökord"},
            {faltnamn: "Källtroget"},
            {faltnamn: "Församling"},
            {faltnamn: "Startår"},
            {faltnamn: "Slutår"}
        ];
    }    
    return {
        getGridData: getGridData,
        getFaltvarden: getFaltvarden,
        getAltFaltvarden: getAltFaltvarden,
        getFaltdefinitioner: getFaltdefinitioner
    };
});