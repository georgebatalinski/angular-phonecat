'use strict';
import PhoneFactory from './phone/phone.service';

export default (app) => {
    var module = app.module('core', ['core.phone']);
    module.factory('Phone', PhoneFactory);
}
// Define the `core` module

