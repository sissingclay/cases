/**
 * Created by claysissing on 03/02/2016.
 */

import angular from 'angular';
import MainController from './MainController';
import CalculationService from './services.calculations';
import PieDirective from './pieCharts/directive.pieChart';
import UpdatePredictionService from './services.updatePrediction';
import ColumnDirective from './columnCharts/directive.columnChart';

export default angular.module('costToRevenue', [])
.controller('MainController', MainController)
.service('UpdatePredictionService', UpdatePredictionService)
.service('CalculationService', CalculationService)
.directive('pieDirective', PieDirective)
 .directive('columnDirective', ColumnDirective);
