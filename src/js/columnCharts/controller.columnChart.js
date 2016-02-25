/**
 *
 */
class ColumnDirectiveController {

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
            ['Year', 'Cases completed', 'Engaged', 'Awaiting engagement'],
            ['2012', 8, 0, 0],
            ['2013', 15, 4, 5],
            ['2014', 0, 88, 95],
            ['2015', 0, 9, 260],
            ['2016', 0, 9, 260],
        ];

        return data;
    }
}

ColumnDirectiveController.$inject = ['$scope', 'CalculationService'];

export default ColumnDirectiveController;
