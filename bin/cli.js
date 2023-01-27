#!/usr/bin/env node
const cac = require( 'cac' );
const { version, bin } = require( '../package.json' );

const cli = cac( Object.keys( bin ).pop() );
const build = require( '../src/build.js' );
const dev = require( '../src/dev.js' );
// const lint = require( '../src/lint.js' );
// const optimizeImages = require( '../src/optimize-images.js' );

cli
  .command( 'build', 'build assets' )
  .action( options => {
    try {
      build( options );
    } catch ( err ) {
      console.log( err );
    }
  } );

cli
  .command( 'start', 'watch assets' )
  .action( options => {
    try {
      dev( options );
    } catch ( err ) {
      console.log( err );
    }
  } );

// cli
//   .command( 'lint', 'lint assets' )
//   .option( '--fix', 'Fixes lint issues' )
//   .action( options => {
//     try {
//       lint( options );
//     } catch ( err ) {
//       console.log( err );
//     }
//   } );
//
// cli
//   .command( 'optimize-images', 'optimize all images' )
//   .action( options => {
//     try {
//       optimizeImages( options );
//     } catch ( err ) {
//       console.log( err );
//     }
//   } );

cli.help();
cli.version( version );
cli.parse();

if ( !cli.matchedCommandName && Object.keys( cli.options ).length <= 1 ) {
  cli.outputHelp();
}
