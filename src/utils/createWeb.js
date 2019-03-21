(function (myApp, document) {
    'use strict';

    myApp.createWebTab = function (store) {
        var linkContainer = document.querySelector(myApp.elements.web);
        var fragment = document.createDocumentFragment();
        linkContainer.innerHTML = '';

        for (var i = 0; i < myApp.ENV_LIMIT_TO; i++) {
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