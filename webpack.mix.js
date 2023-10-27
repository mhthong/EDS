const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css').options({ quiet: true })
    .scripts([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
        'node_modules/@fortawesome/fontawesome-free/js/all.min.js', 
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/lodash/lodash.min.js',
        'node_modules/moment/min/moment.min.js',
        'node_modules/datatables.net/js/jquery.dataTables.min.js',
     ], 'public/js/vendor.js')
     .styles([
        'node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
        'node_modules/datatables.net-dt/css/jquery.dataTables.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/@fortawesome/fontawesome-free/css/all.min.css', 
     ], 'public/css/vendor.css');

mix.copyDirectory('resources/images', 'public/images');

mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts') // Thêm dòng này
.version();

mix.js('resources/js/style.js', 'public/js');

mix.js('resources/js/add-new-form.js', 'public/js');

mix.js('resources/js/book.js', 'public/js');

mix.js('resources/js/bookcreate.js', 'public/js');

mix.js('resources/js/dashboardsvue.js', 'public/js');

mix.js('resources/js/chart.js', 'public/js');
mix.js('resources/js/analytics.js', 'public/js');

mix.js('resources/js/FullCalendarAdmin.js', 'public/js');
