var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionShema = new Schema({
    Text: {type: String},
    Options: [{
        responseOne: {type: String}, 
        responseTwo: {type: String}, 
        responseThree: {type: String}, 
        responseFour: {type: String}
    }],
    CorrectResponse: {type: Number},
    Status: {type: String, enum {'ACTIVE','INACTIVE'}, required: true}
});

var question = mongoose.model("question",questionShema);
module.exports = question;