(function (myApp, document) {
    'use strict';

    myApp.createPagination = function (store, page) {
        var itemsToShow = Math.ceil(store.length / myApp.ENV_LIMIT_TO);

        var linkContainer = document.querySelector(myApp.elements.web);
        var pagesContainer = document.createElement('div');
        var list = document.createElement('ul');

        for (var item = 0; item < itemsToShow; item++) {
            var listItem = document.createElement('li');

            listItem.setAttribute('data-key', item.toString());
            listItem.innerText = (item + 1).toString();

            if ((!page && item === 0)
                || (page && page === item)) {
                myApp.handlers.setActivePage(list, listItem, 'page-active');
            }

            list.appendChild(listItem);
            list.addEventListener('click', myApp.handlers.handlePagination, false);
        }

        pagesContainer.appendChild(list);
        linkContainer.appendChild(pagesContainer);
        pagesContainer.setAttribute('class', 'pages');
    };
})(window.myApp || (window.myApp = {}), document);