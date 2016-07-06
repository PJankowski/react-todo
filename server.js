var express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

var todos = [
  {
    id: 1,
    text: "Finish todo app",
    completed: false
  },
  {
    id: 2,
    text: "Go outside to smoke",
    completed: false
  },
  {
    id: 3,
    text: "Go to bed",
    completed: false
  }
]

app.get('/todos', function(req, res){
    res.json(todos);
});

app.post('/todo', function(req, res){
  var todo = req.body;

  todo.id = Date.now();
  todo.completed = false;

  todos.push(todo);

  res.json(todo);
});

app.get('*', function(req, res){
  res.sendFile('/index.html');
});

app.listen('8080', function(){
  console.log('Serving on port 8080');
});
