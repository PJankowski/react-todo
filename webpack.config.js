var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
