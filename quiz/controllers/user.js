const ctrl = {};

var User = require('../models/user');

ctrl.index = (req,res) => {
    User.find((err, user) =>{
        if(err) {console.log(err)}
        console.log("datos", user);
        let jsonData = JSON.parse(user);
        console.log(jsonData);
        res.render('ranking.pug', {title: 'users list', data: jsonData});
    });
};

ctrl.create = (req,res) => {
    var body = req.body.user;
    console.log(body);
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
