var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: String,
    password: String
});

mongoose.connect("mongodb://localhost/mongodb-find-demo-db");

exports.insert = function (request, response) {
    var user = new User({
        name: 'Leonard',
        password: '123'
    });
    user.save(function (err) {
        console.log('save status:', err ? 'failed' : 'success');
    });
};

exports.find = function (request, response) {
    User.findOne({name:"Leonard"},function (error, docs) {
        if(error) response.send(error.message);
//         response.send("username:"+docs.name+",password:"+docs.password+`
// login success`);
        response.json({name:docs.name,password:docs.password});
    });

};
