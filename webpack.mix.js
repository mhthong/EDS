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
    .sass('resources/sass/app.scss', 'public/css').options({ quiet: true });

mix.copyDirectory('resources/images', 'public/images');

mix.js('resources/js/style.js', 'public/js');

mix.js('resources/js/add-new-form.js', 'public/js');

mix.js('resources/js/book.js', 'public/js');
