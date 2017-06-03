'use strict';
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.ts',
        vendor: './src/vendor.ts'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/, loaders: ['ts-loader','angular2-template-loader']
            },
            {
                test: /\.css$/,
                loaders: ['to-string-loader','style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
    ]
};
