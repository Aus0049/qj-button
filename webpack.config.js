/**
 * Created by Aus on 2017/11/23.
 */
var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'example', 'src', 'index.jsx'),
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                include: [
                    path.join(__dirname, 'example')
                ]
            },
            {
                test: /\.scss/,
                loader: ['css-loader', 'sass-loader'],
                include: [
                    path.join(__dirname, 'example')
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'example')
    }
}

const BASE_CSS_LOADER = 'css?sourceMap&-minimize'

// webpackConfig.module.loaders.push({
//     test: /\.scss$/,
//     exclude: null,
//     loaders: [
//         'style',
//         BASE_CSS_LOADER,
//         'postcss',
//         'sass?sourceMap'
//     ]
// })
// webpackConfig.module.loaders.push({
//     test: /\.css$/,
//     exclude: null,
//     loaders: [
//         'style',
//         BASE_CSS_LOADER,
//         'postcss',
//         'postcss-loader'
//     ]
// })