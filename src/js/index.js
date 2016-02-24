/**
 * Created by claysissing on 03/02/2016.
 */

import angular from 'angular';
import MainController from './MainController';
// import BarDirective from './barDirective';
import PieDirective from './pieDirective';
import CalculationService from './services.calculations';

export default angular.module('CostToRevenue', [])
.controller('MainController', MainController)
.service('CalculationService', CalculationService)
.directive('pieDirective', PieDirective);
// .directive('barDirective', BarDirective);
