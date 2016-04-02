var path = require("path");

var config = {
    entry: ["./src/index.tsx"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.js"
    },
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx", ".css", ".styl"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules|examples/
            }, {
                test: /\.css$/,
                loaders: [
                    'style', 'css'
                ]
            }, {
                test: /\.styl$/,
                loaders: [
                    'style', 'css', 'stylus'
                ]
            }
        ]
    }
};

module.exports = config;
