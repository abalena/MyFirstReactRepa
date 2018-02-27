var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var api = require('./middleware/api')
var library = require('./data/library');

var app = new (require('express'))()
var port = 3004

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get('/api/test', api.test);
app.get('/api/authors', function(req, res){
  return res.json(library.authors)
})
app.get('/api/books', function(req, res){
  return res.json(library.books)
})
app.get('api/authors/:authorName', (req, res) =>

  res.json(library.authors.find((author) =>
    author.name === req.param.authorName)))

app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function() {
  console.log("Library")
})
