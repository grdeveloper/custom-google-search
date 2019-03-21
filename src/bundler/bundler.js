(function (appFiles) {
    'use strict';

    window.addEventListener('load', function () {
        for (var file in appFiles.files) {
            if (appFiles.files.hasOwnProperty(file)) {
                var comment = document.createComment(file);
                document.body.appendChild(comment);

                appFiles.files[file].map(function (filePath) {
                    var script = document.createElement('script');
                    script.setAttribute('src', filePath);

                    document.body.appendChild(script);
                });
            }
        }
    }, false);
})(window.appFiles || (window.appFiles = {}), document);