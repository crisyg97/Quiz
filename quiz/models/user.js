var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userShema = new Schema({
    Name: {type: String},
    TimeEnded: {type: Number},
    Status: {type: String, enum: ['ACTIVE','INACTIVE'], required: true}
});

var user = mongoose.model("user", userShema);
module.exports = user;