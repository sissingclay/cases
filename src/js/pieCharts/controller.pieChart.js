/**
 *
 */
class PieDirectiveController {

    /**
     *
     * @param $scope
     * @param calService
     */
    constructor($scope, calService) {

        this.multiple   = 1;
        this.$scope     = $scope;
        this.calService = calService;

    }

    graphData(multiple) {

        if (multiple) {
            this.multiple = multiple;
        }

        let data = [
            ['Budget spendage', 'Percentage'],
            ['Purchases', this.calService.multiply(10, this.multiple)],
            ['Cases',    this.calService.multiply(60, this.multiple)],
            ['Process',  this.calService.multiply(30, this.multiple)],
            ['Miscellaneous', this.calService.multiply(5, this.multiple)]
        ];

        return data;
    }
}

PieDirectiveController.$inject = ['$scope', 'CalculationService'];

export default PieDirectiveController;
