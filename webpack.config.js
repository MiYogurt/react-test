var webpack = require('webpack'),
    path = require('path');

var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

// expose 暴露
// require('expose?$!jquery');
// $('h1').text();

var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:3000',
        './src/main.js'
    ],
    resolve:{
      root: [
          path.resolve(__dirname,'./src')
      ],
      alias:[
          // jquery: './node_modules/jquery/dist/jquery.min.js',
      ],
      extensions:['','.js','.json','.jsx']
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module:{
        loaders:[
              {
                test: /\.js$/,
                loader: ['babel'],
                exclude: /(node_modules|bower_components)/,
                query: {
                  presets: ['react', 'es2015']
                }
              },
              { test: /\.scss$/,loader:'style!css!sass' },
              { test: /\.(png|jpg)$/, loader: "url?limit=40000" }

        ]
    },
    plugins: [
      new webpack.BannerPlugin('yugo coding'),
      new uglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),

      new CommonsChunkPlugin('init.js')

    ]
};

module.exports = config;