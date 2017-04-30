var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://myusername:mypassword@ds157529.mlab.com:57529/tbaustin-node-todo-api',
  atlas: 'mongodb://admin:fujisaku12345@cluster0-shard-00-00-5wxmg.mongodb.net:27017,cluster0-shard-00-01-5wxmg.mongodb.net:27017,cluster0-shard-00-02-5wxmg.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
}
mongoose.connect(process.env.MongoDB_URI ? db.atlas : db.localhost);

module.exports = {mongoose};
