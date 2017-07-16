'use strict';

const NODE_DEV_ENV = 'dev';
const NODE_PROD_ENV = 'prod';

const MAIN_JS_DIR = __dirname + '/public/dist';
const MAIN_CSS_PATH = 'main.css';

const NODE_ENV = process.env.NODE_ENV || NODE_DEV_ENV;
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: ['./public/js/entry', './public/scss/main.scss'],
    output: {
        path: MAIN_JS_DIR,
        filename: 'main.js'
    },

    watch: NODE_ENV === NODE_DEV_ENV,

    // http://andrewhfarmer.com/webpack-watch-in-vagrant-docker/
    watchOptions: {
        poll: true
    },

    devtool: NODE_ENV === NODE_DEV_ENV ? 'source-map' : false,

    plugins: [
        new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV)}),
        new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery"}),
        new ExtractTextPlugin({filename: MAIN_CSS_PATH, allChunks: true})
    ],

    resolveLoader: {
        moduleExtensions: ['-loader', '*']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'es2017'],
                    plugins: [
                        ['transform-runtime', {
                            helpers: false,
                            polyfill: false,
                            regenerator: true
                        }],
                        'transform-es2015-destructuring',
                        'transform-object-rest-spread',
                        'transform-async-to-generator'
                    ]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',

                    // Could also be write as follow:
                    // use: 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'postcss-loader'
                    ]
                }),
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',

                    // Could also be write as follow:
                    // use: 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 2,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'sass-loader'
                    ]
                }),
            },
            {test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000'},
        ]
    }
};

if (NODE_ENV === NODE_PROD_ENV) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true,
            unsafe: true
        }
    }));
}

module.exports = config;