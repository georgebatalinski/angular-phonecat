'use strict';
import PhoneFactory from './phone/phone.service';

export default (app) => {
    var module = app.module('core', []);
    module.factory('Phone', PhoneFactory);
}
// Define the `core` module

