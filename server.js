var express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

app.get('*', function(req, res){
  res.sendFile('/index.html');
});

app.listen('8080', function(){
  console.log('Serving on port 8080');
});
