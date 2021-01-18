'use strict';
var angular = require('angular'); 
import "./lib/jquery/dist/jquery.js";
import "./lib/angular/angular.js";
import "./lib/angular-animate/angular-animate.js";
import "./lib/angular-resource/angular-resource.js";
import "./lib/ui-router/angular-ui-router.min.js";
import core from './core/core.module';
// Define the `phonecatApp` module
core(angular);
const app = angular.module('phonecatApp', [
  'ngAnimate',
  'ui.router',
  'core',
  // 'phoneDetail',
  // 'phoneList'
]);

angular.element(function() {
  angular.bootstrap(document, ['phonecatApp']);
});
