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

mix.react('resources/js/app.js', 'public/js')
  .react('resources/js/components/Show.js', 'public/js')
  .react('resources/js/components/Cupplelist.js', 'public/js')
  .react('resources/js/components/Uploader.js', 'public/js')
  .react('resources/js/components/Top.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
