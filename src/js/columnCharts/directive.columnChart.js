/**
 * <bar-directive ng-model="Main.form" id="bar_default" class="chart"></bar-directive>
 */

import ColumnDirectiveController from './controller.columnChart'

function ColumnDirective() {

    return {
        restrict: "E",
        require: 'ngModel',
        scope: {
            ngModel: '='
        },
        controller         : ColumnDirectiveController,
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

    let ctrl = scope.ctrl;

//    if (!attrs.multiple) {
//        graphData = ctrl.graphData();
//    }
//
//    if (attrs.multiple) {
//        graphData = ctrl.graphData(attrs.multiple);
//    }

    google.charts.setOnLoadCallback(() => {
        drawBarChart(attrs.id, JSON.parse(attrs.data), JSON.parse(attrs.options));
    });
}

/**
 * This funcion draw the pie chart
 * @param id
 */
function drawBarChart(id, graphData, options) {

    let data = google.visualization.arrayToDataTable(graphData),
        chart = new google.visualization.ColumnChart(document.getElementById(id));

    chart.draw(data, options);
}

export default ColumnDirective;