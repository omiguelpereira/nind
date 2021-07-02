const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const APP_PATH = "./public";

const config = {
  mode: "development",
  entry: path.resolve(__dirname, APP_PATH),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    library: "default",
    libraryTarget: "umd"
  },

  resolve: { extensions: [".js", ".json"] },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
       {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
          ],
      },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(APP_PATH, "index.html")
    })
  ]
};

module.exports = () => config;
