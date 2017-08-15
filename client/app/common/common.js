import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Pie from './pie/pie';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Pie
])

.name;

export default commonModule;
