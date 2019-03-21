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
            var resultForm = document.querySelector(myApp.elements.result);
            var notErrorString = '';

            if (req.status === 200) {
                if (req.readyState === 4) {
                    myApp.store = myApp.storeDate(JSON.parse(req.response));
                    myApp.handlers.handleSearchPaint(myApp.store);
                    myApp.manageErrorClassNames(resultForm, 'result-hide');

                    if (myApp.errorState) {
                        myApp.errorState = false;
                        myApp.handlers.handleError(errorForm, notErrorString);
                        myApp.manageErrorClassNames(resultForm, 'result-hide');
                    }
                }
            }

            if (req.status >= 300) {
                myApp.errorState = true;
                myApp.handlers.handleError(errorForm, myApp.errorMessages.badRequest);
                myApp.manageErrorClassNames(resultForm, 'result-hide');
            }
        },

        handleError: function (element, message) {
            var errorClass = 'show-display';

            element.innerText = message;
            myApp.manageErrorClassNames(element, errorClass);
        },

        handleSearchPaint:  function (store, page) {
            myApp.createImageTab(store, page);
            myApp.createWebTab(store, page);
            myApp.createPagination(store, page);
        },

        handlePagination: function (event) {
            var page = parseInt(event.target.dataset['key'], 10);

            myApp.handlers.setActivePage(
                event.target.parentElement,
                event.target,
                'page-active'
            );

            myApp.handlers.handleSearchPaint(myApp.store, page);
        },

        setActivePage: function (collection, element, className) {
            for (var i = 0; i < collection.childElementCount; i++) {
                if (collection.children[i].classList.contains(className)
                    && collection.children[i] !== element) {
                    collection.children[i].classList.remove(className);
                }
            }
            element.setAttribute('class', className);
        }
    };
})(window.myApp || (window.myApp = {}), document);