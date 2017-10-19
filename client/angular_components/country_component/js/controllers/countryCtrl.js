// this is the controller of the country component.

function countryCtrl($scope, $element, $attrs, $q, worldBankService) {

    var countryCode = this.countryCode;
    $scope.iconClass = "verticalCenter countryFlag flag-icon flag-icon-" + countryCode.toLowerCase();
    var countryInfo = getCountryInformationByCode(countryCode);

    if (countryInfo) {
        var promises = [];
        var indicatorPromise1 = worldBankService.getIndicatorPerCountry('SP.POP.TOTL', countryCode, 'getpopulationdata');
        var indicatorPromise2 = worldBankService.getIndicatorPerCountry('NY.GDP.MKTP.KD.ZG', countryCode , "getgdpgrowthdata");

        promises.push(indicatorPromise1);

        $q.all(promises).then(function(data) {
            console.log("all promises are resolved.");
            fillScope(countryInfo);
        });

    }

    //private functions
    function getCountryInformationByCode(code) {
        var codeUpperCase = code.toUpperCase();
        var country;
        countryData.forEach(function(value) {
            if (value.iso2Code == codeUpperCase) {
                country = value
            }
        });
        return country;
    };

    //function 
    function getPopulationInformationByCode(code) {
        var codeUpperCase = code.toUpperCase();
        var country;
        countryData.forEach(function(value) {
            if (value.iso2Code == codeUpperCase) {
                country = value
            }
        });
        return country;
    };

    function fillScope(country) {
        $scope.countryInfo = country;
        $scope.countryName = country.name;
        $scope.populationData = populationData;
        $scope.gdpgrowthdata = populationData;

        if(populationData && populationData.length > 1){
            $scope.lastYearPopulationValue = populationData[0].value;
        }
        if(gdpgrowthdata && gdpgrowthdata.length > 1){
            $scope.lastYearPopulation = gdpgrowthdata[0].date;
        }
    }


    function getLastElement(array, countryCode){
        return array[0];
    }
}