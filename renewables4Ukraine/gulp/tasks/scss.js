import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; // Зжимання CSS файла
import webpcss from 'gulp-webpcss'; // Вивід WEBP зображень
import autoprefixer from 'gulp-autoprefixer'; // Додавання вендорних префіксів
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Групування медіа запросіва

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SCSS',
                message: 'Error: <%= error.message %>'
            })))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(
            app.plugins.if(
                app.isBuild,
                groupCssMediaQueries()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ['last 3 versions'],
                    cascade: true
                })
            )
        )
        // розкоментувати якщо потрібні webp зображення
        // .pipe(
        //     app.plugins.if(
        //         app.isBuild,
        //         webpcss(
        //             {
        //                 webpClass: '.webp',
        //                 noWebpClass: '.no-webp'
        //             }
        //         )
        //     )
        // )
        // розкоментувати якщо потрібні webp зображення
        // Розкоментувати якщо потрібна не стиснена копія файлу стилів
        .pipe(app.gulp.dest(app.path.build.css)) // Звичайний файл стилів
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()
            )
        ) // Стиснений файл стилів
        .pipe(rename({
			extname: '.min.css'
		}))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}