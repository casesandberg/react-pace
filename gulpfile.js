var gulp = require('gulp');
// var babel = require('babel/register');

var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');



var config = {
  examples: {
    entry: ['webpack-dev-server/client?http://localhost:2090', 'webpack/hot/dev-server', './examples/index.js'],
    output: {
      path: path.join(__dirname, 'examples/build'),
      filename: 'bundle.js',
      publicPath: 'http://localhost:2090/examples/build/'
    },
    module: {
      loaders: [
        {
          exclude: /node_modules/,
          test: /\.js$/,
          loaders: ['react-hot-loader']
        }, {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader']
        }, {
          test: /\.css$/,
          loaders: [ 'style-loader', 'css-loader' ]
        }, {
          test: /\.md$/,
          loaders: [ 'html-loader' ]
        }
      ]
    },
    resolve: {
      alias: {
        'react-pace': path.resolve(__dirname, './src/Pace.jsx')
      },
      extensions: ['', '.js', '.jsx']
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({ quiet: true }),
      new webpack.NoErrorsPlugin()
    ],
    devtool: 'eval',
    quiet: true
  }
};


gulp.task('examples', function(done) {
  done();
  return new WebpackDevServer(webpack(config.examples), {
    publicPath: config.examples.output.publicPath,
    hot: true,
    stats: {
      cached: false,
      cachedAssets: false,
      exclude: ['node_modules', 'components']
    }
  }).listen(2090, 'localhost', function(err, result) {
    if (err) {
      return console.log(err);
    } else {
      return console.log('webpack dev server listening at localhost:2090');
    }
  });
});


gulp.task('default', ['examples']);
