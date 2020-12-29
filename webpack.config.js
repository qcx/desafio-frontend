const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// minify das imagens performance sem perder a qualidade
const ImageminPlugin = require("imagemin-webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/index.js", "./src/scss/style.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "views/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(jpeg|png|jpg|svg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[hash:6].[ext]",
              outputPath: "images",
              publicPath: "images",
              emitFile: true,
              //   esModule: false,
            },
          },
          {
            loader: ImageminPlugin.loader,
            options: {
              bail: false,
              cache: false,
              imageminOptions: {
                plugins: [
                  ["pngquant", { quality: [0.5, 0.5] }],
                  ["mozjpeg", { quality: 50, progressive: true }],
                  ["gifsicle", { interlaced: true, optimizationLevel: 3 }],
                  [
                    "svgo",
                    {
                      plugins: [{ removeViewBox: false }],
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        // exclude: /node_modules/,
        loader: "file-loader",
        // options: {
        //   outputPath: "fonts/",
        // },
      },
    ],
  },
  optimization: {
    // otimiza libs incluidas
    splitChunks: { chunks: "all" },
  },
};
