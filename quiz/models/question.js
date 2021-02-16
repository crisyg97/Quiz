var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionShema = new Schema({
    Text: {type: String},
    Options: [{
        responseOne: {type: String}, 
        responseTwo: {type: String}, 
        responseThree: {type: String}, 
        responseFour: {type: String}
    }]
});