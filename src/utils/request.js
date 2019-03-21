(function (myApp) {
    'use strict';

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