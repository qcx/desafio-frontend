const { join, resolve } = require("path");
const { mkdir, writeFileSync } = require("fs");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackImagesResizer = require("webpack-images-resizer");
const isDevelopment = process.env.NODE_ENV !== "production";

function createFolder(path) {
  mkdir(resolve(__dirname, path), { recursive: true }, (err) => {
    if (err) throw err;
    writeFileSync(join(path, ".empty"), "");
  });
}

createFolder("static");
createFolder("images");

const images = {
  large: 1024,
  medium: 768,
  small: 480,
};

const plugins = [];
const copyPatterns = [{ from: "static/", to: "" }];

for (let size in images) {
  const path = `images/${size}`;

  const plugin = new WebpackImagesResizer(
    [
      {
        src: resolve(__dirname, "images"),
        dest: path,
      },
    ],
    { width: images[size] }
  );

  plugins.push(plugin);
}

module.exports = {
  entry: "./src/app.js",
  mode: "production",
  optimization: {
    usedExports: true,
  },
  output: {
    path: __dirname + "/dist/build",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: join(__dirname, "src"),
    port: 8000,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.global\.scss$/,
        loader: [
          //isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.global\.scss$/,
        use: [
          "sass-to-string",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name][hash].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: plugins.concat([
    new CopyPlugin({
      patterns: copyPatterns,
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ]),
};
