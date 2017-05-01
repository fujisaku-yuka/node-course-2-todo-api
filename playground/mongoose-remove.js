const {ObjectID} = require('mongodb');

const {moongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

// Todo.remove().then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5906ad11347ba92074e55801'}).then((todo) => {

});

Todo.findByIdAndRemove('5906ad11347ba92074e55801').then((todo) => {
  console.log(todo);
});
