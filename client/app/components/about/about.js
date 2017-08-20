import angular from 'angular';
import uiRouter from 'angular-ui-router';
import about from "./about.html";
import aboutController from "./about.controller.js";
import './about.scss';

let aboutModule = angular.module('about', [
  uiRouter
]).controller('aboutController', aboutController)

.config(($stateProvider, $urlRouterProvider) => {
	"ngInject";

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('about', {
			url: '/about',
			params: {
				model: null
			},
			template: about,
			controller: 'aboutController',
			controllerAs: '$ctrl',
			// resolve: {
			// 	modelObj: function($state, $stateParams){
			// 		console.log($stateParams, '!!!')
			// 		if(!$stateParams.model){
			// 			$state.go('home')
			// 		}else{
			// 			return $stateParams.model
			// 		}
			// 	}
			// },
		});
})

.name;

export default aboutModule;
