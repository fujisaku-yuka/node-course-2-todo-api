var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://admin:password@ds123381.mlab.com:23381/todoapp',
  atlas: 'mongodb://admin:fujisaku12345@cluster0-shard-00-00-5wxmg.mongodb.net:27017,cluster0-shard-00-01-5wxmg.mongodb.net:27017,cluster0-shard-00-02-5wxmg.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
}
mongoose.connect(process.env.MONGODB_URI ? db.mlab : db.localhost);

module.exports = {mongoose};
