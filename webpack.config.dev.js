const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: { presets: ['es2015', 'env', 'react', 'stage-2'] }
        },
        {
          test: /\.css$/,
          //use: [ 'style-loader', 'css-loader' ],
          loader: "style-loader!css-loader"
        }
      ]
    },
    resolve: { 
      extensions: ['*', '.js', '.jsx'] 
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ]
  };
  