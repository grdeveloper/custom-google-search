(function (myApp) {
    'use strict';

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