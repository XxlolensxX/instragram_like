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
        // {
        //   test: /\.css$/,
        //   use: [ MiniCssExtractTextPlugin.loader, 
        //     {
        //     loader: 'css-loader',
        //     options: {
        //       sourceMaps: true,
        //       //url: false
        //     }
        //   }]
        // },       
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
            limit: 1000,
            fallback: 'file-loader',
            name: '../images/[name].[ext]',
          }
        }
      },
      // {
      //   test: /\.(gif|png|jpe?g|svg)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'images/'
      //        }
      //     },
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         mozjpeg: {
      //           progressive: true,
      //           quality: 65
      //         },
      //         optipng: {
      //           enabled: false,
      //         },
      //         pngquant: {
      //           quality: '65-90',
      //           speed: 4
      //         },
      //           gifsicle: {
      //           interlaced: false,
      //         },
      //         // the webp option will enable WEBP
      //         webp: {
      //           quality: 75
      //         }
      //       }
      //     }
      //   ]
      // }
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
      template: './src/index.html',
      minify: false
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 9000,
      server: { baseDir: ['dist'] }
    })
  ]
}