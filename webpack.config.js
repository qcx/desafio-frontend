module.exports = {
  entry: './src/pages/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: __dirname + '/public'
  },
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                '@babel/preset-env',
            ],
            plugins: [
                '@babel/transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
};
