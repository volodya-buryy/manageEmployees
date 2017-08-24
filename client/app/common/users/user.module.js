import angular from 'angular';
import userService from "./user.service"

let userModule = angular.module('user-servise', [])

.service('UserServise',  userService)

.name;

export default userModule;
