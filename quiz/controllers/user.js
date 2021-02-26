const ctrl = {};

var User = require('../models/user');

ctrl.index = (req,res) => {
    
};

ctrl.create = (req,res) => {
    var body = req.body.user;
    var user = new User({
        name: body.name,
        Status: 'ACTIVE'
    });
    user.save((err) =>{
        if(err) {console.log(err)}
        res.send({success: true});
    });
};

module.exports = ctrl;
