import angular from 'angular';
import uiRouter from 'angular-ui-router';
import home from "./home.html";
import homeController from "./home.controller.js";
import './home.scss';

let homeModule = angular.module('home', [
  uiRouter
]).controller('homeController', homeController)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: home,
      controller: 'homeController',
      controllerAs: '$ctrl'
    });
})

.name;

export default homeModule;
