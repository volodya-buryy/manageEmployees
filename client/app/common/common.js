import angular from 'angular';
import Navbar from './navbar/navbar';
import Pie from './pie/pie';
import User from './users/user.module';


let commonModule = angular.module('app.common', [
  User,
  Navbar,
  Pie,  
])

.name;

export default commonModule;
