(function (myApp, document) {
    'use strict';

    /**
     * Structures and enlargers DOM tree with web info from the store
     *
     * @param {store} store - Store of the application containing the search result
     * @param {number | undefined} page - The current page to load the web results
     */
    myApp.createWebTab = function (store, page) {
        var linkContainer = document.querySelector(myApp.elements.web);
        var fragment = document.createDocumentFragment();
        linkContainer.innerHTML = '';

        var count = page ? page * myApp.ENV_LIMIT_TO : 0;
        var limit = (count + myApp.ENV_LIMIT_TO) > store.length
            ? store.length
            : count + myApp.ENV_LIMIT_TO;

        for (var i = count; i < limit; i++) {
            var currentItem = store[i];

            var linkWrapper = document.createElement('div');
            var link =  document.createElement('a');
            var description = document.createElement('h5');

            link.setAttribute('href', currentItem.link);
            link.innerText = currentItem.link;
            link.setAttribute('target', 'blank');

            description.innerHTML = currentItem.description;

            linkWrapper.appendChild(link);
            linkWrapper.appendChild(description);
            fragment.appendChild(linkWrapper);
        }

        linkContainer.appendChild(fragment);
    };
})(window.myApp || (window.myApp = {}), document);