#Databases and ORMs

A database is an organized collection of data. The data is typically organized to model aspects of reality in a way that supports processes requiring information. For example, modelling the availability of rooms in hotels in a way that supports finding a hotel with vacancies.

Database Management System is an umbrella term that refers to all sorts of completely different tools (i.e. computer programs or embedded libraries), mostly working in different and very unique ways. These applications handle, or heavily assist in handling, dealing with collections of information. Since information (or data) itself can come in various shapes and sizes, dozens of DBMS have been developed, along with tons of DB applications, since the second half of the 21st century to help in solving different programming and computerisation needs.

Database management systems are based on database models: structures defined for handling the data. Each emerging DBMS, and applications created to actualise their methods, work in very different ways with regards to definitions and storage-and-retrieval operations of said information.

Although there are a large number of solutions that implement different DBMs, each period in history has seen a relatively small amount of choices rapidly become extremely popular and stay in use for a longer time, with probably the most predominant choice since the past couple of decades (or even longer) being the Relational Database Management Systems (RDBMS).
##Databases
###Relational
- SQLite
- MySQL
- PostgreSQL
- MSSQL
- Oracle

###NoSQL
- MongoDB
- Redis
- CouchDB
- ArangoDB
- LevelDB
- Neo4j

##ORMs

Object-relational mapping (ORM, O/RM, and O/R mapping) in computer science is a programming technique for converting data between incompatible type systems in object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language. There are both free and commercial packages available that perform object-relational mapping, although some programmers opt to create their own ORM tools.

- [Mongoose](http://mongoosejs.com) - Elegant MongoDB object modeling.
- [Sequelize](https://github.com/sequelize/sequelize) - Multi-dialect ORM. Supports PostgreSQL, SQLite, MySQL.

##Resources

- Drivers
    - [LevelUP](https://github.com/rvagg/node-levelup) - LevelDB.
    - [MongoDB](https://github.com/mongodb/node-mongodb-native) - MongoDB driver.
    - [PostgreSQL](https://github.com/brianc/node-postgres) - PostgreSQL client. Pure JavaScript and native libpq bindings.
    - [MySQL](https://github.com/felixge/node-mysql) - MySQL client.
    - [Redis](https://github.com/mranney/node_redis) - Redis client.
- ODM / ORM
    - [Bookshelf](http://bookshelfjs.org) - ORM for PostgreSQL, MySQL and SQLite3 in the style of Backbone.js.
    - [JugglingDB](https://github.com/1602/jugglingdb) - Multi-database ORM with a common API. Supports Redis, PostgreSQL, MongoDB, MySQL, SQLite, Neo4j, memory, and more.
    - [Mongoose](http://mongoosejs.com) - Elegant MongoDB object modeling.
    - [Sequelize](https://github.com/sequelize/sequelize) - Multi-dialect ORM. Supports PostgreSQL, SQLite, MySQL.
    - [Waterline](https://github.com/balderdashy/waterline) - Datastore-agnostic tool that dramatically simplifies interaction with one or more databases.
    - [Iridium](https://github.com/SierraSoftworks/Iridium) - A high performance MongoDB ORM with support for promises, distributed caching, preprocessing, validation and plugins.
    - [OpenRecord](https://github.com/PhilWaldmann/openrecord) - ORM for PostgreSQL, MySQL, SQLite3 and RESTful datastores. Similar to ActiveRecord.
- Query builder
    - [Knex](http://knexjs.org) - A query builder for PostgreSQL, MySQL and SQLite3, designed to be flexible, portable, and fun to use.

