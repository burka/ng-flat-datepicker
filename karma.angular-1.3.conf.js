var baseConfig = require('./karma.conf');

module.exports = function(config) {
    baseConfig(config);
    config.files.unshift({
        pattern: 'bower_components/angular-1.3/angular.js',
        watched: false
    },{
        pattern: 'bower_components/angular-mocks-1.3/angular-mocks.js',
        watched: false
    });
    config.port = 9813;
}
