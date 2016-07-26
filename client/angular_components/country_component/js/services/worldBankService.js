var worldBankService = services.factory("worldBankService", ["worldBankResource", function(worldBankResource) {
    // exposed API
    return {
        getGDPperYear: getGDPperYear,
        getCountriesList: getCountriesList,
        getIndicatorPerCountry : getIndicatorPerCountry
    };

    function getGDPperYear(year) {
        sanityCheck(text);
        return worldBankResource.getGDPperYear(text);
    };
    
    function getCountriesList() {
        return worldBankResource.getCountriesList();
    };
    
   function getIndicatorPerCountry(indicatorCode, countryCode, callbackMethodName) {
        return worldBankResource.getIndicatorPerCountry(indicatorCode, countryCode, callbackMethodName);
    };

    var sanityCheck = function(text) {
        if (!text) {
            throw new Error("Parameter was not valid");
        }
    };

}]);