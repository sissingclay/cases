class MainController {

    constructor(calService, $location, updatePrediction) {

        this.budget             = 1000000;
        this.purchase           = calService.calculatePurchasesToMake(this.budget);
        this.cases              = calService.calculateCasesToWin(this.budget, this.purchase);
        this.direct             = calService.calculateDirectRevenue(this.budget, this.cases);
        this.currentPath        = $location.path();
        this.multiple           = 1;
        this.updatePrediction   = updatePrediction;
        this.form               = {
            budget: this.budget,
            purchase: this.purchase,
            cases: this.cases,
            direct: this.direct
        };
        this.original           = angular.copy(this.form);
    }

    updateCurrentPath(url, multiple) {
        this.multiple       = multiple;
        this.currentPath    = url;
    }

    updateData(predictiveData) {
        let data        = this.updatePrediction.matchData(this.original, predictiveData);
        this.form       = this.updatePrediction.updateData(data);
        this.original   = angular.copy(this.form);
    }
}

MainController.$inject = ['CalculationService', '$location', 'UpdatePredictionService'];

export default MainController;
