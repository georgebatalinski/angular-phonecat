'use strict';
// var angular = require('angular'); 
// import "./lib/jquery/dist/jquery.js";
// import "./lib/angular/angular.js";
// import "./lib/angular-animate/angular-animate.js";
// import "./lib/angular-resource/angular-resource.js";
// import "./lib/ui-router/angular-ui-router.min.js";
//import * as configFn from "./app.config";
import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";
import ngResource from "angular-resource";
import core from './core/core.module';
import phonelist from './phone-list/phone-list.module';
// Define the `phonecatApp` module

const MODULE_NAME = 'phonecatApp';

const app = angular.module(MODULE_NAME, [
  //'ngAnimate',
  uiRouter,
  require('angular-resource'),
  'core',
  //'phoneDetail',
  'phoneList'
]).config(['$stateProvider', ($stateProvider) => {
  var helloState = {
    name: 'phones',
    url: '/phones',
    template: '<phone-list></phone-list>'
  }

  var aboutState = {
    name: 'phonesid',
    url: '/phones/:phoneId',
    template: '<phone-detail></phone-detail>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
}]);
core(angular);
phonelist(angular);

angular.element(function() {
  angular.bootstrap(document, ['phonecatApp']);
});

export default MODULE_NAME;
