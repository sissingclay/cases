/**
 * <pie-directive ng-model="Main.form" id="pie_defaultX5" class="chart" multiple="5"></pie-directive>
 */

import PieDirectiveController from './controller.pieChart'

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
        link: link
    };
}

/**
 * This is the link function
 * @param scope
 * @param element
 * @param attrs
 * @param ngModel
 */
function link(scope, element, attrs, ngModel) {

    let ctrl = scope.ctrl,
        graphData;

    if (!attrs.multiple) {
        graphData = ctrl.graphData();
    }

    if (attrs.multiple) {
        graphData = ctrl.graphData(attrs.multiple);
    }

    google.charts.setOnLoadCallback(() => {
        drawBarChart(attrs.id, graphData);
    });
}

/**
 * This funcion draw the pie chart
 * @param id
 */
function drawBarChart(id, graphData) {

    let data = google.visualization.arrayToDataTable(graphData),
        options = {
            title: 'Spending percentage of budget',
            pieHole: 0.4
        },
        chart = new google.visualization.PieChart(document.getElementById(id));

    chart.draw(data, options);
}

export default PieDirective;
