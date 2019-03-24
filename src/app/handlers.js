(function (myApp, document) {
    'use strict';

    myApp.handlers = {

        /**
         * Makes XML HTTP call to retrieve the search results
         *
         * @param {string} value - Input term to search
         * @returns {XMLHttpRequestResponseType} JSON object for the result
         */
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

        /**
         * Handles response from XML HTTP call: shows either the errorMessage or the result
         *
         * @param {XMLHttpRequestResponseType} req - Response result
         */
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

        /**
         * Adds appropriate error className and text
         *
         * @param {HTMLElement} element - Element to show in case of error
         * @param {string} message - Error message to show
         */
        handleError: function (element, message) {
            var errorClass = 'show-display';

            element.innerText = message;
            myApp.manageErrorClassNames(element, errorClass);
        },

        /**
         * Construct DOM with the search result
         *
         * @param {store} store - Store containing the application state of results
         * @param {number} page - Page number to navigate
         */
        handleSearchPaint:  function (store, page) {
            myApp.createImageTab(store, page);
            myApp.createWebTab(store, page);
            myApp.createPagination(store, page);
        },

        /**
         * Marks clicked page item as active loading the page
         *
         * @param {MouseEvent} event - Click event fired in the pagination
         */
        handlePagination: function (event) {
            var target = event.target;
            var page = parseInt(target.dataset['key'], 10);
            if (target.classList.contains('page-active')) {
                return;
            }

            myApp.handlers.setActivePage(
                target.parentElement,
                target,
                'page-active'
            );

            myApp.handlers.handleSearchPaint(myApp.store, page);
        },

        /**
         * Add active className to the current page removing the old one
         *
         * @param {HTMLCollection} collection - Pages list
         * @param {HTMLLIElement} element - Selected page to navigate
         * @param {string} className - Active className for the current page
         */
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