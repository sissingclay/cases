 function BarDirective() {
     return {
         restrict: "E",
         require: 'ngModel',
         scope: {
             ngModel: '='
         },
         controller         : BarDirectiveController,
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
             // scope.$parent.Main.form = {
             //     budget: graphData[graphData.length - 1][1],
             //     direct: graphData[graphData.length - 1][2]
             // };

             google.charts.setOnLoadCallback(drawBarChart);

             function drawBarChart() {

                 //piechart
                 var barData = google.visualization.arrayToDataTable(graphData);

                 var barOptions = {
                     chart: {
                       title: 'Fighting counterfeit products over the years'
                     },
                     animation:{
                         duration: 500,
                         easing: 'out',
                     },
                     hAxis: {
                       title: 'Amount',
                       minValue: 0,
                     },
                     vAxis: {
                       title: 'Years'
                     },
                     bars: 'horizontal'
                 };

                 var material = new google.charts.Bar(document.getElementById('bar_chart'));
                 material.draw(barData, barOptions);
             }

             scope.$watch(function() { return ngModel.$modelValue; }, function(newValue, oldValue) {

                 var lastYearLength,
                     updateData;

                     graphData       = angular.copy(ctrl.graphData);
                     updateData      = graphData[graphData.length - 1];
                     lastYearLength  = updateData.length;

                 if (newValue) {

                     for (var i = 0; i < lastYearLength; i++) {

                         if (newValue.budget && typeof newValue.budget === 'number' && i === 1) {
                             updateData[i] = newValue.budget;
                         }

                         if (newValue.direct && typeof newValue.direct === 'number' && i === 2) {
                             updateData[i] = newValue.direct;
                             updateData[3] = ctrl.calculateIndirectRevenue(newValue.direct);
                         }

                         if (newValue.multiple && typeof updateData[i] === 'number') {
                             updateData[i] = updateData[i] * newValue.multiple;
                         }
                     }

                     drawBarChart();
                 }
             }, true);
         }
     };
 }

 // Directive's controller
 class BarDirectiveController {
     constructor ($scope, $window) {
         this.name       = "david";
         this.graphData  = [
             ['Counterfeit', 'Cost', 'Direct revenue', 'Indirect revenue'],
             ["2012", 8175000, 8008000],
             ["2013", 3792000, 3694000],
             ["2014", 2695000, 2896000],
             ["2015", 2099000, 1953000],
             ["2016", 1526000, 1517000]
         ];
         this.$scope     = $scope;
     }

     calculateIndirectRevenue (data) {
         var amount = parseInt(Math.ceil(data + (data/0.126)), 10);
         return amount;
     }

     coolNumberChanged (newValue, oldValue) {
         console.log('asdf', newValue);
         console.log('oldValue', oldValue);
     }
 }

 BarDirectiveController.$inject = ['$scope'];

 export default BarDirective;
