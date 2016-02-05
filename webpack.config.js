// webpack.config.js

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: './src/index.js',
    // output tells webpack where to put the bundle it creates

    output: {
        libraryTarget: 'umd',
        // the destination file name
        filename: './lib/app.js'
    },

    devtool: 'source-map',
    // externals let you tell webpack about external dependencies
    // that shouldn't be resolved by webpack.

    externals: [],

    //TODO eslint: {configFile: './.eslintrc', failOnWarning: false },

    //Sass
    sasslint: {
        emitError: true,
        emitWarning: true,
        quiet: false,
        failOnWarning: true,
        failOnError: true
    },

    stats: {
        children: false
    },
    //SassEnd

    module: {

        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            },
            {
                test: /\s[a|c]ss$/,
                exclude: /node_modules/,
                loader: 'sasslint'
            }
        ],

        loaders: [
            // babel loader, testing for files that have a .js extension
            // (except for files in our node_modules folder!).
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    compact: false // because I want readable output
                },
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            // or any other compile-to-css language
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
            }
        ]
    },

    //This is for jsdoc-babel
    //TODO babel: {optional: ['runtime'], extensions: ['js', 'es6'] },

    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    //TODO 'node_modules/jsdoc-babel'
    plugins: [
        new ExtractTextPlugin('./lib/[name].css')
    ],

    debug: true,
    progress: true,
    colors: true
};