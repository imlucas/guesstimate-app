var path = require('path')
var localPlugins = require('./plugins')

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    // karma only needs to know about the test bundle
    files: [
      'node_modules/babel-core/browser-polyfill.js',
      {
        pattern: 'tests.bundle.js',
        watched: true
      }
    ],
    frameworks: [ 'chai', 'mocha' ],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      'tests.bundle.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    usePolling: true,
    singleRun: false,
    // webpack config object
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      plugins: localPlugins,
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          {
            test: /\.(jpe?g|png|gif)/,
            loader: 'url-loader?limit=1000'
          },
          {
            test: /\.css$/,
            loader: 'null-loader',
          }
        ]
      },
      resolve: {
        alias: {
          gComponents: path.resolve('./src/components'),
          gEngine: path.resolve('./src/lib/engine'),
          gModules: path.resolve('./src/modules'),
          lib: path.resolve('./src/lib'),
          servers: path.resolve('./src/server'),
          // TODO(matthew): if this works, make it unnecessary.
          server: path.resolve('./src/server'),
        }
      }
    },
    colors: true,
    autoWatch: true,
    webpackMiddleware: {
      noInfo: true,
    }
  });
};
