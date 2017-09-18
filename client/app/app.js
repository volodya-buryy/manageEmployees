import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import * as d3 from "d3";

let app = angular.module('app', [
    uiRouter,
    Common,
    Components
])
app.config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
	$locationProvider.html5Mode(true).hashPrefix('!');
	
  })
app.run(($rootScope) => {
	console.log($rootScope)

    let request = indexedDB.open("ManageEmployees", 5);

    request.onupgradeneeded = function(e) {
        var thisDB = e.target.result;
 
        if(!thisDB.objectStoreNames.contains("userInfo")) {
            console.log("I need to make the note objectstore");
            var objectStore = thisDB.createObjectStore("userInfo", { keyPath: "id", autoIncrement:true });  
            objectStore.createIndex("text", "text", { unique: false });
        }
    }
 
	request.onsuccess = function(e){
		$rootScope.$emit('test', e.target.result)
	}

})
app.component('app', AppComponent);
