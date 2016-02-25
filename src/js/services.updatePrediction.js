import CalculationService from "./services.calculations";

class UpdatePredictionService {

    constructor(calService) {
        this.calService = calService;
        this.data;
    }

    matchData(originalData, ViewData) {

        let updatedPredictionData = {};

        for (let key in originalData) {

            // skip loop if the property is from prototype
            if (!originalData.hasOwnProperty(key)) continue;

            updatedPredictionData[key] = ViewData[key];

            if (originalData[key] !== ViewData[key]) {
                updatedPredictionData.changed = key;
            }
        }

        return updatedPredictionData;
    }

    updateData(data) {

        this.data = data;

        this.assigningUpdateMethods();
        delete this.data['changed'];

        return this.data;
    }

    assigningUpdateMethods() {

        let changed = this.data.changed;

        switch (changed) {

            case 'budget':

                this.changedBudget();

                break;

            default:
                console.log('Test');
        }
    }

    changedBudget() {
        this.data.purchase  = this.calService.calculatePurchasesToMake(this.data.budget);
        this.data.cases     = this.calService.calculateCasesToWin(this.data.budget, this.data.purchase);
        this.data.direct    = this.calService.calculateDirectRevenue(this.data.budget, this.data.cases);
    }
}

UpdatePredictionService.$inject = ['CalculationService'];

export default UpdatePredictionService;
