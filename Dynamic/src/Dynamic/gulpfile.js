/// <binding BeforeBuild='BeforeBuild' AfterBuild='AfterBuild' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('aot-compile', shell.task([
    'npm run aot'
]));

gulp.task('rollup', shell.task([
    'npm run rollup'
]));

gulp.task('copy-zone', function () {
    return gulp.src(['node_modules/zone.js/dist/zone.min.js'], { "base": "node_modules/zone.js/dist" })
                .pipe(gulp.dest('wwwroot/scripts/'))
});

gulp.task('copy-reflect', function () {
    return gulp.src(['node_modules/reflect-metadata/Reflect.js'], { "base": "node_modules/reflect-metadata" })
                .pipe(gulp.dest('wwwroot/scripts/'))
});

/* dataTables */
gulp.task('copy-datatables-js', function () {
    return gulp.src(['Scripts/dataTables.net/js/jquery.dataTables.min.js'])
                .pipe(gulp.dest('wwwroot/scripts/'))
});

gulp.task('copy-datatables-css', function () {
    return gulp.src(['Scripts/dataTables.net-dt/css/*'])
                .pipe(gulp.dest('wwwroot/css/'))
});

gulp.task('copy-datatables-images', function () {
    return gulp.src(['Scripts/dataTables.net-dt/images/*'])
                .pipe(gulp.dest('wwwroot/images/'))
});

gulp.task('copy-datatables', ['copy-datatables-js', 'copy-datatables-css', 'copy-datatables-images'], function () { });

/* jQuery */
gulp.task('copy-jquery', function () {
    return gulp.src(['Scripts/jquery/dist/jquery.min.js'])
                .pipe(gulp.dest('wwwroot/scripts/'))
});


/* this should run before each build */
gulp.task('BeforeBuild', ['aot-compile'], function () { });

/* this should run after each build */
gulp.task('AfterBuild', ['copy-zone', 'copy-reflect', 'copy-jquery', 'copy-datatables', 'rollup'], function () { });
