class MainController {

    constructor(calService) {

        this.budget     = 1000000;
        this.purchase   = 1000;
        this.cases      = 100;
        this.direct     = calService.calculateDirectRevenue(this.budget);

        this.form = {
            budget: this.budget,
            purchase: this.purchase,
            cases: this.cases,
            direct: this.direct
        };
    }
}

MainController.$inject = ['CalculationService'];

export default MainController;
