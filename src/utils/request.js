(function (myApp) {
    'use strict';

    /**
     * Handles the main XML HTTP request
     *
     * @returns {XMLHttpRequest} An instance of XML HTTP request
     */
    myApp.xmlHttpRequest = function() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
        try {
            return new ActiveXObject('MSXML2.XMLHTTP.6.0');
        } catch (e) {
            try {
                return new ActiveXObject('MSXML2.XMLHTTP.3.0');
            } catch (e) {
                return null;
            }
        }
    };
})(window.myApp || (window.myApp = {}));