(function (myApp) {
    'use strict';

    /**
     * Checks whether the incoming param is empty or not
     *
     * @param {string} value - The value to check for validity
     * @returns {boolean} Meaningful or empty value
     */
    myApp.validate = function (value) {
        return !!value.trim();
    };
})(window.myApp || (window.myApp = {}));