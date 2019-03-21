(function (myApp) {
    'use strict';

    myApp.validate = function (value) {
        return !!value.trim();
    };
})(window.myApp || (window.myApp = {}));