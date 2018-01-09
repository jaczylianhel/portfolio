var gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('scripts', function (callback) {
    webpack(require('../../webpack.config.js'), function (err, stats) {
        console.log('connected');

        if (err) {
            console.log(err.toString());
        }

        console.log(stats.toString());
        callback();
    });
});
