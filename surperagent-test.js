var request = require('superagent');
request
    .get('http://localhost:3000/find')
    .end(function(res){
        console.log(res.body);
    });