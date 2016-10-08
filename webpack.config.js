var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        index: './index.js',
        main: './main.js'
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            {test:/\.css$/,loader:'style!css?modules!postcss'},
            {test:/\.js/,loader:'babel'}
        ],
        postcss: [
            require('autoprefixer')
        ],
        plugins: [
           // new webpack.optimize.OccurenceOrderPlugin(),
            //new webpack.optimize.UglifyJsPlugin(),
            new ExtractTextPlugin("style.css")
        ]
    }
};