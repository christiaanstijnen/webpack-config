const { merge } = require('webpack-merge');

module.exports = (config) => {
  const baseConfig = require( './webpack.base.config' )( config );
  return merge( baseConfig, {
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            "style-loader",
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
      ],
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      https: true,
      port: 1908,
      open: false,
      hot: true,
      compress: true,
      allowedHosts: 'all',
      client: {
        webSocketURL: {
          hostname: 'localhost',
          port: 1908
        }
      },
    },
    devtool: 'eval-source-map',
    output: {
      publicPath: 'https://localhost:1908/'
    },
    mode: 'development'
  })
}