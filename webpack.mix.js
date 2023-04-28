let mix = require('laravel-mix');


mix
    .sass('src/scss/style.scss', '/css')
    .options({
        processCssUrls: false
    })
    .scripts([
        'src/plugins/other/lozad.min.js',
    ], 'dist/js/vendor.js')
    .js('src/js/app.js', '/js')
    .setPublicPath('dist')


