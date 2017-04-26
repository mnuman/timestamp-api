var express = require('express');
var url = require('url');
var app = express();

// handle request for favorite's icon with empty response.
app.get('/favicon.ico', (req, res) => {
  res.send();
});

app.use(function(req, res) {
  var path = decodeURI(url.parse(req.url).pathname.substring(1));
  var dateObject = require('./dates').convert(path);

  console.log(JSON.stringify(dateObject));
  
  res.send(dateObject);
});

app.listen(8080, function() {
  console.log('Example app listening on port 8080!');
})
