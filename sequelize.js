// Sequelize

var Sequelize = require('sequelize');

var db = 'testdb';
var dbuser = 'test';
var dbpass = 'test';
var dbhost = 'localhost';
var dbport = 3306;

var db = new Sequelize(
  db,
  dbuser,
  dbpass, {
    host: dbhost,
    dialect: "mysql",
    port: dbport,
    logging: console.log
  }
);

db.authenticate()
  .complete(function(err) {
    if (err) {
      console.log('Unable to connect to the database:', err)
    }
    else {
      console.log('Connection has been established successfully.')
    }
  });


var TestModel = db.define('TestModel', {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING
}, {
  tableName: 'test',
  timestamps: false
});



checkCreateUser();

function checkCreateUser() {
  TestModel.find({
    where: {
      id: 7
    }
  }).success(function(item) {
    if (item === null) {
      console.log('record doesn\'t exist!')
      TestModel.create({
        id: 7,
        name: 'John'
      }).success(function(data) {
        if (data === null) {
          console.log('write failed');
        }
        else {
          checkCreateUser();
          console.log('write success', data);
        }
      });
    }
    else {
      console.log('record exists!', item)
      item.updateAttributes({
        name: 'Jacob'
      }).success(function(data) {
        if (data === null) {
          console.log('write failed');
        }
        else {
          console.log('write success', data);
        }
      })
    }
  });
}
