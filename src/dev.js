const webpack = require( 'webpack' );
const webpackDevServer = require( 'webpack-dev-server' );

module.exports = ( options = {} ) => {
  process.env.NODE_ENV = 'development';

  const config = require( './utils/get-config.js' )( options, true );
  const webpackConfig = require( './webpack.dev.config.js' )( config, options );

  if( options.configOnly ) {
    return webpackConfig;
  }

  const devServerOptions = Object.assign( {}, webpackConfig.devServer, {
    host: 'localhost',
  } );

  const compiler = webpack( webpackConfig );
  const server = new webpackDevServer( devServerOptions, compiler );

  ( async () => {
    await server.start();

    console.log( 'Starting server' );
  } )();
};
