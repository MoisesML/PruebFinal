"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

// import { MongoClient } from "mongodb";
// const database = "mongodb+srv://moises:moises@cluster0.c1lqv.mongodb.net/Fazrt-Moises?retryWrites=true&w=majority";
var database = "mongodb://localhost:27017/companydb";
var MongoDB = _mongoose["default"];
MongoDB.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(function (db) {
  return console.log('Db is connect');
})["catch"](function (error) {
  return console.log('Ocurrio un error en la conexion', error);
}); // })
// const connection = mongoose.connection
// connection.once("open", function(){
//     console.log('MongoDB databse connection estableshid')
// })
// connection.once('open', () => {
//     console.log('Mongodb Connection stablished');
// });
// connection.on('error', (err) => {
//     console.log('Mongodb connection error:', err);
//     process.exit();
// });
// try {
//   const uri =
//     "mongodb+srv://moises:moises@cluster0.c1lqv.mongodb.net/Fazrt-Moises?retryWrites=true&w=majority";
//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   client.connect((err) => {
//     if (err) return console.log(err, "error"); 
//     console.log("conectado");
//   });
// } catch (error) {
//     console.log('erorrooror')
// }