const ctrl = {};

const Question = require('../models/question');

function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

ctrl.create = (req, res) => {
    var body = req.body.question;
    var question = new Question({
        Text: body.Text,
        Options: [{
            responseOne: body.responseOne,
            responseTwo: body.responseTwo,
            responseThree: body.responseThree,
            responseFour: body.responseFour
        }],
        CorrectResponse: body.CorrectResponse,
        Status: 'ACTIVE'
    })
};

ctrl.index = (req, res) => {
    question.find((err, question) =>{
        if(err) {console.log(err)}
        res.send({
            question : question
        });
    });
};

ctrl.randomQuestion = (req,res) => {
    var randomNum = getRandomArbitrary(1,100);
} 

ctrl.remove = (req,res) => {
    var id = req.params.question_id;
    Question.find({_id : id}, (err,question) => {
        if(err) {console.log(err)}
        else{
            if(!question) {console.log('no se encontro la pregunta especifica')}
            else{ 
                question.Status = 'INACTIVE';
                question.save((err) => {
                    if(err) {console.log(err)}
                    res.send({success: true});
                });
            }
        }
    });
}

module.exports = ctrl;