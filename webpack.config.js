path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),

        new UglifyJsPlugin()
    ],
    devtool: 'eval',
    entry: {
        index:'./src/index',
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

        },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src/assets/scss'),
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },

    devServer: {
        contentBase: path.join(__dirname, "public"),
        host: 'localhost',
        port: 8070,
        disableHostCheck: true,
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/index.html' },
            ]
        }

    }

};
