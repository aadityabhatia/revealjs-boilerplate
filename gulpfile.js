const gulp = require('gulp')
const connect = require('gulp-connect')
const yargs = require('yargs')

const root = yargs.argv.root || '.'
const port = yargs.argv.port || 8000
const host = yargs.argv.host || 'localhost'

reload = () => gulp.src(['*.html', '*.md'])
    .pipe(connect.reload());

serve = () => {

    connect.server({
        root: root,
        port: port,
        host: host,
        livereload: true
    })

    gulp.watch(['*.html', '*.md'], gulp.series('reload'))
}

exports.reload = reload
exports.default = serve
exports.serve = serve
