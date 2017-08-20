import angular from 'angular';
import userService from "./user.service"

let userModule = angular.module('pie', [])

.service('UserServise',  userService)

.name;

export default userModule;
