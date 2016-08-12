var mongoose = require('mongoose');
var session = require('express-session');


var User = mongoose.model('User', {
    name: String,
    password: String
});

mongoose.connect("mongodb://localhost/mongodb-find-demo-db");

exports.insert = function (request, response) {
    let name = request.body.name;
    let password = request.body.password;
    User.findOne({name:name},function (e, docs) {
        if (e) response.send(e.message);

        if(docs==null) {
            console.log(name,password);
            var user = new User({
                name: name,
                password: password
            });
            user.save(function (err) {
                console.log('save status:', err ? 'failed' : 'success');
            });
        }
        else{
            // response.send('用户已存在');
            var tpl = '<script>alert("用户已存在")</script>';
            response.send(tpl); //你传回去的HTML码流将在客户的浏览器中执行
            // response.redirect('./signin');
        }
    });

};

exports.login = function (request, response) {
    let name = request.body.name;
    let password = request.body.password;
    console.log('---finding---');
    User.findOne({name: name, password: password}, function (e, docs) {
        if (e) response.send(e.message);

        if (docs != null) {
            response.send(docs+'<br><br>login success');
        } else {
            response.redirect('./login');
            // var tpl = '<script>alert("YOU ARE A BAD BOY")</script>';
            // response.send(tpl); //你传回去的HTML码流将在客户的浏览器中执行
            //

        }
    });

};
