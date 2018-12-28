const path = require('path')
const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.html$/,
          loader: 'vue-template-loader',
          exclude: /index.html/
        }
        // {
        //   test: /\.scss$/,
        //   use: [
        //     'sass-loader' // compiles Sass to CSS, using Node Sass by default
        //   ]
        // },
        // {
        //   test: /\.css$/,
        //   use: [
        //     'style-loader',
        //     'css-loader'
        //   ]
        // },
      ]
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        'jquery': 'jquery/dist/jquery.slim.js'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default'],
        'Util': 'exports-loader?Util!bootstrap/js/dist/util'
      })
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ]
  }
}
