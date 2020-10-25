const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist/js')
    
  },
  module:{
    rules:[
      {
        test:/\.png$/,
        use:'file-loader'
      }
    ]
  },
  watch:true,
  watchOptions:{
    // aggregateTimeout:100,
    ignored:'/node_modules/',
    poll:10000,
  },
  
};