var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userShema = new Schema({
    Name: {type: String},
    TimeEnded: {type: Number}
});

var user = mongoose.model("user", userShema);
module.exports = user;