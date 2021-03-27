import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import {minifyHtml} from 'vite-plugin-html';
import legacy from '@vitejs/plugin-legacy'
import WindiCSS from 'vite-plugin-windicss'
import viteCompression from 'vite-plugin-compression'
import prerenderSpaPlugin from 'rollup-plugin-prerender-spa-plugin'
import * as path from 'path'

export default defineConfig({
    plugins: [
        reactRefresh(),
        WindiCSS({
            safelist: 'prose prose-sm m-auto'
        }),
        legacy({
            targets: ['defaults', 'dead', '> 1%', 'ie 10', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'ie 11', 'since 2002', 'unreleased versions']
        }),
        minifyHtml({
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true
        }),
        viteCompression({
            algorithm: 'brotliCompress',
            ext: '.br'
        }),
        viteCompression({
            algorithm: 'gzip'
        }),
        prerenderSpaPlugin({
            staticDir: path.resolve(__dirname, 'dist'),
            routes: ['/', '/ScenicSpot'],
        })
    ],
    build: {
        minify: 'terser',
        brotliSize: true,
        cssCodeSplit: true,
        terserOptions: {
            sourceMap: false,
            ecma: 5,
            ie8: true,
            safari10: true,
            keep_classnames: false,
            keep_fnames: false,
            compress: true
        }
    },
    esbuild: {
        include: './src/**/*.{js,ts,jsx,tsx,css,json,text,base64,dataurl,file,binary}'
    }
})
