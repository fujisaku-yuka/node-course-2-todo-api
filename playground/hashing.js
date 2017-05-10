const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';
var hashedPassword = ''

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
    hashedPassword = hash;

    bcrypt.compare(password, hashedPassword, (err, res) => {
      console.log(res);
    });
  })
});



// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, 'salt');
// console.log(token);
//
// var decoded = jwt.verify(token, 'salt');
// console.log('decoded', decoded);

// -------------------------------

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'salt').toString()
// }
//
// token.data.id = 5;
// token.data.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'salt').toString();
//
// if(resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed, do not trust');
// }
