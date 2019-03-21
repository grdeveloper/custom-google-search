(function (myApp, document) {
    'use strict';

    myApp.createImageTab = function (store) {
        var imageContainer = document.querySelector(myApp.elements.image);
        var fragment = document.createDocumentFragment();
        imageContainer.innerHTML = '';

        for (var i = 0; i < myApp.ENV_LIMIT_TO; i++) {
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