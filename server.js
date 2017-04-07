import express from 'express';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
const mongoose = require('mongoose');
const config = require('config');
const bodyParser = require('body-parser');

mongoose.connect(config.get('mongoUri'));

const app = express();
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (res, req)=> {
  req.send('abc');
});

app.listen(3000, function () {
  console.log("server started at http://localhost:3000");
});