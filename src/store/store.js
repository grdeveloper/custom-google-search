(function (myApp) {
    'use strict';

    /**
     * Sets the incoming results as a main store of the application
     *
     * @param {XMLHttpRequestResponseType} data - Search results as a response
     * @returns {store} New modified object as an application state
     */
    myApp.storeDate = function (data) {
        return data.items.map(function (item) {
            return {
                link: 'https://' + item.displayLink,
                description: item.htmlSnippet,
                imagePath: item.image.thumbnailLink
            };
        });
    };
})(window.myApp || (window.myApp = {}));