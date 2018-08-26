const path = require('path');
const MiniCssExtractTextPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: "source-map",
  entry: path.resolve(__dirname, '../src/js/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist/js'),
    filename: '[name].js',
    //publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader', 
            options: {
              presets: ['babel-preset-env', 'react']
            }
          }     
        },     
        {
        //test: tipo de archivo
        //use: loader que se usará
        test: /\.s?css$/,  
        use: [ MiniCssExtractTextPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMaps: true,
              //url: false
            }
          },        
          { 
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
              sourceMaps: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2000,
            fallback: 'file-loader',
            name: '../images/[name].[ext]',
          }
        }
      },
    ]
  },
  watch: true,
  plugins: [
    new MiniCssExtractTextPlugin({
      filename: '../css/[name].css',
    }),
    new HtmlWebpackPlugin({
      //title: 'Basic Landing Page',
      filename: '../index.html',
      template: './src/html/index.html',
      minify: false
    }),
    new HtmlWebpackPlugin({
      //title: 'Basic Landing Page',
      filename: '../follow.html',
      template: './src/html/follow.html',
      minify: false
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 9000,
      server: { baseDir: ['dist'] }
    })
  ]
}