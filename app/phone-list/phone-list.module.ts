'use strict';
import Phone from './phone-list.component';
export default (app) => {
    var module = app.module('phoneList', ['core']);
    module.component('phoneList', Phone);
}
