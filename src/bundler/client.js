(function (appFiles) {
    'use strict';

    appFiles.files = Object.freeze({
        environment: [
            './src/environment/environment.js'
        ],
        components: [
            './src/components/image.component.js',
            './src/components/pagination.component.js',
            './src/components/web.component.js'
        ],
        store: [
            './src/store/store.js'
        ],
        utils: [
            './src/utils/classnames.js',
            './src/utils/request.js',
            './src/utils/validate.js'
        ],
        app: [
            './src/app/handlers.js',
            './src/app/index.js'
        ]
    });
})(window.appFiles || (window.appFiles = {}));