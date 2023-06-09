const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ( config ) => {
  return {
    entry: config.entries,
    output: {
      filename: 'js/[name][hash].js',
      path:  path.resolve( path.dirname( config.PATH ), config.dist ),
      chunkFilename: '[name][hash].js',
      clean: true,
      publicPath: config.publicPath
    },
    stats: {
      assets: true,
      colors: true,
      modules: true,
      chunks: true,
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          type: 'asset/resource',
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.vue', '.mjs', '.js', '.json', '.ts', '.tsx'],
      modules: [
        'node_modules',
        path.join( __dirname, '..', 'node_modules' ),
        path.join( path.dirname( config.PATH ), 'node_modules' ),
      ],
    },
    resolveLoader: {
      modules: [
        'node_modules',
        path.join( __dirname, '..', 'node_modules' ),
        path.join( path.dirname( config.PATH ), 'node_modules' ),
      ],
    },
    plugins: [
      // new ESLintPlugin(),
      // new StylelintPlugin({files: './source/**/*.scss'}),
      new MiniCssExtractPlugin({ filename: 'css/[name][chunkhash].css' }),
      new WebpackManifestPlugin({
        writeToFileEmit: true
      })
    ],
    optimization : {
      usedExports: true,
      minimizer: [ new CssMinimizerPlugin() ]
    }
  }
}