const ctrl = {};

var user = require('./models/user');

ctrl.index = (req,res) => {

};

ctrl.create = (req,res) => {
    var body = req.body.user;
    var user = new user({
        name: body.name,
    });
    user.save((err) =>{
        if(err) {console.log(err)}
        res.send({success: true})
    });
};

module.exports = ctrl;
