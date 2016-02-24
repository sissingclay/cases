function PieDirective() {
    return {
        restrict: "E",
        require: 'ngModel',
        scope: {
            ngModel: '='
        },
        controller         : PieDirectiveController,
        controllerAs       : 'ctrl',
        bindToController   : true,
        link: function(scope, element, attrs, ngModel) {

            var ctrl        = scope.ctrl,
                graphData   = [],
                indirectRev,
                lastRecord;

            angular.forEach(ctrl.graphData, function (val, key) {

                if(key !== 0) {
                    indirectRev = ctrl.calculateIndirectRevenue(val[2]);
                    ctrl.graphData[key].push(indirectRev);
                }
            });

            graphData   = angular.copy(ctrl.graphData);

            google.charts.setOnLoadCallback(drawBarChart);

            function drawBarChart() {

                var data = google.visualization.arrayToDataTable([
                    ['Budget spendage', 'Percentage'],
                    ['Cases',    11],
                    ['Purchases',2],
                    ['Process',  2],
                    ['Miscellaneous', 2]
                ]);

                var options = {
                  title: 'Percentage of budget spent/section',
                  pieHole: 0.4,
                };

                var chart = new google.visualization.PieChart(document.getElementById('pie_default'));

                chart.draw(data, options);
            }
        }
    };
}

// Directive's controller
class PieDirectiveController {
    constructor ($scope, $window) {
        this.name       = "david";
        this.graphData  = [
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ];
        this.$scope     = $scope;
    }

    calculateIndirectRevenue (data) {
        var amount = parseInt(Math.ceil(data + (data/0.126)), 10);
        return amount;
    }
}

PieDirectiveController.$inject = ['$scope'];

export default PieDirective;
