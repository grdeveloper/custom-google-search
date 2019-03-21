(function (appFiles) {
    'use strict';

    appFiles.files = {
        environment: [
            './src/environment/environment.js'
        ],
        utils: [
            './src/utils/classnames.js',
            './src/utils/createImage.js',
            './src/utils/createPagination.js',
            './src/utils/createWeb.js',
            './src/utils/request.js',
            './src/utils/store.js',
            './src/utils/validate.js',
        ],
        app: [
            './src/app/handlers.js',
            './src/app/index.js'
        ]
    };
})(window.appFiles || (window.appFiles = {}));