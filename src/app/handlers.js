(function (myApp, document) {
    'use strict';

    myApp.handlers = {
        handleSubmit: function (value) {
            var request = myApp.xmlHttpRequest();
            var method = 'GET';
            var url = 'https://www.googleapis.com/customsearch/v1?key=' + myApp.ENV_KEY
                + '&cx=' + myApp.ENV_ID
                + '&q=' + value
                + '&searchType=' + myApp.ENV_IMAGE;

            request.onreadystatechange = function () {
                myApp.handlers.onReadyStateChange(request);
            };
            request.open(method, url, true);
            request.send(null);
        },

        onReadyStateChange: function (req) {
            var errorForm = document.querySelector(myApp.elements.error);
            var notErrorString = '';

            if (req.status === 200) {
                if (req.readyState === 4) {
                    myApp.store = myApp.storeDate(JSON.parse(req.response));
                    myApp.handlers.handleSearchPaint(myApp.store);

                    if (myApp.errorState) {
                        myApp.errorState = false;
                        myApp.handlers.handleError(errorForm, notErrorString);
                    }
                }
            }

            if (req.status >= 300) {
                myApp.errorState = true;
                myApp.handlers.handleError(errorForm, myApp.errorMessages.badRequest);
            }
        },

        handleError: function (element, message) {
            var errorClass = 'show-display';

            element.innerText = message;
            myApp.manageErrorClassNames(element, errorClass);
        },

        handleSearchPaint:  function (store) {
            myApp.createImageTab(store);
            myApp.createWebTab(store);
            myApp.createPagination(store);
        },

        handlePagination: function (event) {
            
        }
    };
})(window.myApp || (window.myApp = {}), document);