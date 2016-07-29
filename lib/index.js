var tesseract = require('node-tesseract');

module.exports = function(location, callback) {
    var options = {
        psm: 6,
        binary: '/usr/local/bin/tesseract'
    };

    // Recognize text of any language in any format
    tesseract.process(location, options, function(err, text) {
        if(err) {
            callback(err, null);
        } else {
            callback(null, text);
        }
    });
}
