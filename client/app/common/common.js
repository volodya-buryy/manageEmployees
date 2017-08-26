import angular from 'angular';
import Navbar from './navbar/navbar';
import Pie from './pie/pie';
import User from './users/user.module';
import AddItem from './add-item/add-item.module';


let commonModule = angular.module('app.common', [
	User,
	Navbar,
	Pie,  
	AddItem
])

.name;

export default commonModule;
