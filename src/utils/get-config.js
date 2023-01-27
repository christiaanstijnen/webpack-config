const findUp = require( 'find-up' );
const chalk  = require( 'chalk' );

module.exports = () => {
  const webpackConfigPath = findUp.sync( 'tatabanya.config.js' );

  if ( ! webpackConfigPath ) {
    console.log( `❌  ${ chalk.white.bgRed.bold( ' Could not find tatabanya.config.js: Create a dawn.config.js file in the root of the project. For more information check out the README.md. ' ) }` );
    process.exit( 1 );
  }

  const webpackConfig = require( webpackConfigPath );

  webpackConfig.PATH = webpackConfigPath;

  return webpackConfig;
};
