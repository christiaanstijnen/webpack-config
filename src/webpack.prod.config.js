const { merge } = require( 'webpack-merge' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (config) => {
  const baseConfig = require ('./webpack.base.config')(config);
  return merge( baseConfig, {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
      ],
    },
  })
}
