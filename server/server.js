const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
// connect

// model

// var newTodo = new Todo({
//   text: '      Edit this video     '
// });

// var newTodo = new Todo({
//   text: 'Cook dinner',
//   completed: false,
//   completedAt: 1
// });

// newTodo.save().then((doc) => {
//   console.log('Save todo', doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

// var newUser = new User({
//   email: '   yuka@fujisaku.com'
// });
//
// newUser.save().then((doc) => {
//   console.log('Save user', doc);
// }, (e) => {
//   console.log('Unable to save user', e);
// });
