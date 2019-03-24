(function (myApp) {
    'use strict';

    /**
     * Either sets or removes class of a given element containing error
     *
     * @param {HTMLElement} element - The node to add or remove class
     * @param {string} errorClass - The className to be set on the element
     */
    myApp.manageErrorClassNames = function (element, errorClass) {
        if (myApp.errorState) {
            if (!element.classList.contains(errorClass)) {
                element.classList.add(errorClass);
            }
            return;
        }

        if (element.classList.contains(errorClass)) {
            element.classList.remove(errorClass);
        }
    };
})(window.myApp || (window.myApp = {}));