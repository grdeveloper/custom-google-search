(function (myApp, document) {
    'use strict';

    /**
     * Structures and enlargers DOM tree with images from the store
     *
     * @param {store} store - Store of the application containing the search result
     * @param {number | undefined} page - The current page to load the image results
     */
    myApp.createImageTab = function (store, page) {
        var imageContainer = document.querySelector(myApp.elements.image);
        var fragment = document.createDocumentFragment();
        imageContainer.innerHTML = '';

        var count = page ? page * myApp.ENV_LIMIT_TO : 0;
        var limit = (count + myApp.ENV_LIMIT_TO) > store.length
            ? store.length
            : count + myApp.ENV_LIMIT_TO;

        for (var i = count; i < limit; i++) {
            var currentItem = store[i];
            if (!currentItem.imagePath) {
                continue;
            }

            var imageWrapper = document.createElement('div');
            var image =  document.createElement('img');

            image.setAttribute('src', currentItem.imagePath);
            image.setAttribute('alt', currentItem.link);

            imageWrapper.appendChild(image);
            fragment.appendChild(imageWrapper);
        }

        imageContainer.appendChild(fragment);
    };
})(window.myApp || (window.myApp = {}), document);