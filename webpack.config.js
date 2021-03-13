// Webpack uses this to work with directories
const path = require('path');
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: './src/js/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use:  [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'sass-loader'
            ]
        },
        {
            test: /\.(otf|ttf|woff|woff2|gif|svg|png|jpg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'images'
                }
              },
            ],
        },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    })
  ],
  mode: 'production'
};