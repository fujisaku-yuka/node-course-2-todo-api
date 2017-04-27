const {ObjectID} = require('mongodb');

const {moongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

// var id = '5900c012be1ff62284918dac';

// if(!ObjectID.isValid(id)) {
//   console.log('Id is not valid');
// }

// Todo.find({_id: id}).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({_id: id}).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

var userId = '58fe0aab5efde51828fd7855';

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('Id not found');
  }
  console.log('User', user);
}, (e) => {
  console.log(e);
})
