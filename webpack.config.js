const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: './src/client/index',
  mode: 'development',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: { loader: 'babel-loader' },
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ],
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'file-loader',
    }],
  },
  resolve: { extensions: [ '.js', '.jsx' ] },
  devServer: {
    port: 3000,
    open: true,
    proxy: { '/api': 'http://localhost:8080' },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
