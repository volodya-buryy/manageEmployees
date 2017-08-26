import angular from 'angular';
import addItemComponent from './add-item.component';

let addItemModule = angular.module('addItem', [])

.component('addItem', addItemComponent)
  
.name;

export default addItemModule;
