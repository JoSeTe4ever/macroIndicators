myApp.controller('dashboardCtrl', ['$scope','worldBankService', function($scope, $worldBankService) {
    $scope.tags = [];

     $worldBankService.getCountriesList().then(function(data) {
        // Since this is JsonP request it will never go through the sucess fase.
    }, function(data){
       // $scope.tags = countryData;
    });
    
    
    $scope.loadTags = function(query) {
       return countryData.filter(function(country) {
           return country.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
       });
    };
    
}]);
