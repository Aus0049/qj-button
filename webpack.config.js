/**
 * Created by Aus on 2017/11/23.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
    name: 'qj-button',
    target: 'web',
    entry: path.join(__dirname, 'example', 'src', 'index.jsx'),
    output: {
        filename: `[name]_[hash].js`,
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'example', 'index.html'),
            hash: false,
            filename: 'index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: true
            }
        })
    ]
};

module.exports = webpackConfig;

// module.exports = {
//     entry: path.join(__dirname, 'example', 'src', 'index.jsx'),
//     output: {
//         filename: 'bundle.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.jsx$/,
//                 loader: 'babel-loader',
//                 include: [
//                     path.join(__dirname, 'example')
//                 ]
//             },
//             {
//                 test: /\.scss/,
//                 loader: ['css-loader', 'sass-loader'],
//                 include: [
//                     path.join(__dirname, 'example')
//                 ]
//             }
//         ]
//     },
//     devServer: {
//         contentBase: path.join(__dirname, 'example')
//     }
// }
//
// const BASE_CSS_LOADER = 'css?sourceMap&-minimize'