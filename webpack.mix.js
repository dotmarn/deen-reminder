let mix = require('laravel-mix');

mix.setPublicPath('./')
    .js('assets/js/newtab.js', 'dist/js').vue()
    .copy('assets/json', 'dist/json')
    .copy('assets/images/', 'dist/images')
    .options({
        processCssUrls: false
    }); 