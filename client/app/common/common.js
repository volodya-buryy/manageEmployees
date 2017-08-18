import angular from 'angular';
import Navbar from './navbar/navbar';
import Pie from './pie/pie';

let commonModule = angular.module('app.common', [
  Navbar,
  Pie
])

.name;

export default commonModule;
