
var express = require('express')
,  http = require('http')
,  path = require('path')
,  app = express()
,  MtGoxClient = require("./mtgox")
,	 client = new MtGoxClient(process.env.MTGOX_KEY, process.env.MTGOX_SECRET);


app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public/frontend')));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/api/dayhigh', function(req, res) {
	res.writeHead(200, {
                     'Content-Type': 'text/html',
                     'Access-Control-Allow-Origin' : '*'});
    client.ticker(function(err, data) {
    if (err) { throw err; }
    console.log(data);
    res.end(data.data.high.display);
  });
})


app.get('/api/daylow', function(req, res) {
  res.writeHead(200, {
                     'Content-Type': 'text/html',
                     'Access-Control-Allow-Origin' : '*'});
    client.ticker(function(err, data) {
    if (err) { throw err; }
    console.log(data);
    res.end(data.data.low.display);
  });
})

app.get('/api/last', function(req, res) {
  res.writeHead(200, {
                     'Content-Type': 'text/html',
                     'Access-Control-Allow-Origin' : '*'});
    client.ticker(function(err, data) {
    if (err) { throw err; }
    console.log(data);
    res.end(data.data.last.display);
  });
})

app.get('/api/bid', function(req, res) {
  res.writeHead(200, {
                     'Content-Type': 'text/html',
                     'Access-Control-Allow-Origin' : '*'});
    client.ticker(function(err, data) {
    if (err) { throw err; }
    console.log(data);
    res.end(data.data.buy.display);
  });
})

app.get('/api/ask', function(req, res) {
  res.writeHead(200, {
                     'Content-Type': 'text/html',
                     'Access-Control-Allow-Origin' : '*'});
    client.ticker(function(err, data) {
    if (err) { throw err; }
    console.log(data);
    res.end(data.data.sell.display);
  });
})