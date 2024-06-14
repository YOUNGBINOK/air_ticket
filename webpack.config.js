const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 20KB
          },
        },
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./html/index.html",
    }),
    new Dotenv(),
    new webpack.DefinePlugin({
      APP_NAME: JSON.stringify(process.env.API_KEY),
      VERSION: JSON.stringify("v0.1"),
    }),
    new webpack.EnvironmentPlugin({ DEBUG: "on" }),
  ],
  devServer: {
    static: "./dist",
    port: 9000,
    open: true,
  },
  devtool: "source-map",
  mode: process.env.NODE_ENV || "development",
  watch: true,
};
