var webpack = require('webpack'),
    config = require('./webpack.config.js'),
    dev = require('webpack-dev-middleware'),
    hot = require('webpack-hot-middleware'),
    express = require('express'),
    path = require('path');

var compiler = webpack(config);

var app = express();

app.use(dev(compiler, {publicPath: config.output.publicPath}));
app.use(hot(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

console.log('Compiling...');
app.listen(3000, 'localhost', function (err) {
  if (err) return console.err(err);
});
