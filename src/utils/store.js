(function (myApp) {
    'use strict';

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