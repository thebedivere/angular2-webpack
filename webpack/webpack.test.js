'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devTool: 'inline-source-map',
    module: {
        preLoaders: [
            { exclude: /node_modules/, loader: 'tslint', test: /\.ts$/ }
        ],
        loaders: [
            { loader: 'raw', test: /\.(css|html)$/ },
            { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts'],
        moduleDirectories: ['node_modules'],
        root: path.resolve('.', 'src')
    },
    tslint: {
        emitErrors: true
    }
}