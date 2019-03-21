(function (myApp, document) {
    'use strict';

    myApp.elements = {
        form: 'search-form',
        input: 'search',
        error: '.custom-search__form__error',
        image: '.custom-search__results__img__container',
        web: '.custom-search__results__web__container'
    };

    myApp.errorMessages = {
        empty: 'Please, specify the search term...',
        badRequest: 'Ooops, something went wrong'
    };

    myApp.errorState = false;

    var searchForm = document.forms[myApp.elements.form];
    var errorForm = document.querySelector(myApp.elements.error);

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var searchValue = searchForm[myApp.elements.input].value;
        if (!myApp.validate(searchValue)) {
            myApp.errorState = true;
            myApp.handlers.handleError(errorForm, myApp.errorMessages.empty);
            return;
        }

        myApp.handlers.handleSubmit(searchValue);
    }, false);
})(window.myApp || (window.myApp = {}), document);