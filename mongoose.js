// Mongoose

var Mongoose = require('mongoose');

Mongoose.connect('mongodb://127.0.0.1:27017/testMongo');
Mongoose.connection.on('error', function() {
  console.error(
    '✗ MongoDB Connection Error. Please make sure MongoDB is running.');
});

var User = new Mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    default: '',
    lowercase: true
  }
});

checkCreateUser();

function checkCreateUser() {
  User.findById(7, function(err, user) {
    if (err) {
      console.log('record doesn\'t exist!')
      var user = new User();
      user.name = 'bob';
      user.id = 7;
      user.save(function(err) {
        if (!err) {
          console.log('Created User')
          checkCreateUser();
        }
      });
    }
    else {
      console.log('record exists!', user)
    }
  });
}
