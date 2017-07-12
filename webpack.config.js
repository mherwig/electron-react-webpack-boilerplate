const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webConfig = {
  entry: {
    app: './src/app/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: 'src/index.html' }
    ])
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].bundle.js'
  },
  module: {
    loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devtool: "inline-source-map"
}

const electronConfig = {
  entry: {
    renderer: [ './src/renderer.js' ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/index.js' }
    ])
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devtool: "inline-source-map",
  target: "electron-renderer"
}

module.exports = [ webConfig, electronConfig ]