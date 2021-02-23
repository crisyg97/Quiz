const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017";
//useNewUrlParser => como una mejor forma de conectarse a la base de datos
module.exports.connect = () => {
    mongoose.connect(uri, {dbName: "quizApp", useNewUrlParser: true});
    var db = mongoose.connection;
    //eventos especificos activados por mongodb
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function(callback){
        console.log("Connection Succeeded");
      });
    return db;
};
