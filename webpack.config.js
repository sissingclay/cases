// webpack.config.js
module.exports = {
    entry: "./src/index.js",
    // output tells webpack where to put the bundle it creates
    output: {
        libraryTarget: "umd",
        // the destination file name
        filename: "./lib/app.js"
    },
    devtool: "#inline-source-map",
    // externals let you tell webpack about external dependencies
    // that shouldn't be resolved by webpack.
    externals: [
        {
            // We're not only webpack that lodash should be an
            // external dependency, but we're also specifying how
            // lodash should be loaded in different scenarios
            // (more on that below)
            lodash: {
                root: "_",
                commonjs: "lodash",
                commonjs2: "lodash",
                amd: "lodash"
            }
        }
    ],
    module: {
        loaders: [
            // babel loader, testing for files that have a .js extension
            // (except for files in our node_modules folder!).
            {
                test: /\.js$/,
                loader: "babel",
                query: {
                    compact: false // because I want readable output
                }
            }
        ]
    }
};