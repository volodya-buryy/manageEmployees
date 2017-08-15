import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pieDirective from "./pie.controller"

let pieModule = angular.module('pie', [uiRouter])

.directive('pie',  ()=>new pieDirective)

.name;

export default pieModule;
