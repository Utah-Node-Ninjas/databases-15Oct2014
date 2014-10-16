// Mongoose

var Mongoose = require('mongoose');

Mongoose.connect('mongodb://127.0.0.1:27017/testMongo');
Mongoose.connection.on('error', function() {
  console.error(
    '✗ MongoDB Connection Error. Please make sure MongoDB is running.');
});

Mongoose.connection.once('open', function callback () {

  console.log('Connected');

  var User = Mongoose.Schema({
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

  var UserModel = Mongoose.model('User', User);

  checkCreateUser();

  function checkCreateUser() {
    UserModel.findOne({id:7}, function(err, user) {

      if(err) {
        console.log('Issue with the db');
      } else if (!user) {
        console.log('record doesn\'t exist!');
        var user = new UserModel();
        user.name = 'bob';
        user.id = 7;
        user.save(function(err) {
          if (!err) {
            console.log('Created User');
            checkCreateUser();
          }
        });
      } else {
        console.log('record exists!', user);
      }
    });
  }


});


