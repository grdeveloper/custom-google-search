(function (myApp, document) {
    'use strict';

    myApp.createPagination = function (store) {
        var itemsToShow = Math.ceil(store.length / myApp.ENV_LIMIT_TO);
        var itemToStart = 1;

        var linkContainer = document.querySelector(myApp.elements.web);
        var pagesContainer = document.createElement('div');
        var list = document.createElement('ul');

        for (var item = itemToStart; item < itemsToShow + itemToStart; item++) {
            var listItem = document.createElement('li');

            listItem.setAttribute('data-key', item);
            listItem.innerText = item;
            list.appendChild(listItem);
            list.addEventListener('click', myApp.handlers.handlePagination, false);
        }

        pagesContainer.appendChild(list);
        linkContainer.appendChild(pagesContainer);
        pagesContainer.setAttribute('class', 'pages');
    };
})(window.myApp || (window.myApp = {}), document);