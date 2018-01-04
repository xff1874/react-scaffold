var path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

var HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = {
    extensions: [".js", ".json", ".less", ".css"],
    alias: {
        jest: path.resolve(__dirname, 'test'),
        CJS: path.resolve(__dirname, "client")
    }
};
if (process.env.NODE_ENV == "production") {
    //do somthing
}
const devtool = "cheap-module-source-map"
const imgloader = {
    test: /\.(png|jpg|gif)$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                limit: 8192
            }
        }
    ]
};

const client = {
    devtool: devtool,
    entry: {
        example: ["babel-polyfill", path.resolve(__dirname, "client/module/example/index.js")],
        ssr16: path.resolve(__dirname, "client/module/example/ssr16index.js")
    },
    output: {
        path: path.join(__dirname, "build", "client"),
        filename: "[name].bundle.js",
        publicPath: "/client"
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')({ browsers: ['Android >= 4', "iOS >=7"] })]
                        }
                    }]
                })
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            imgloader,
            { test: /\.js$/, use: "babel-loader", exclude: /(node_modules|bower_components)/ }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
            filename: "example.html",
            chunks: ["example"],
            template: 'static/views/example.html'
        })
    ],
    resolve: resolve
}

const server = {
    devtool: devtool,
    entry: {
        index: ["babel-polyfill", './server/index.js']
    },
    target: "node",
    output: {
        path: path.resolve(__dirname, "build/server"),
        filename: "[name].bundle.js",
        libraryTarget: "commonjs2"
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                use: "eslint-loader",
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /(node_modules|bower_components)/
            },
            imgloader,
            {
                test: /\.less$/,
                use: ['css-loader']
            }
        ]
    },
    resolve: resolve

}

module.exports = [client, server]