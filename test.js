const request = require('request');
let bodyParser = require("body-parser");

console.log('Welcome!');

let code='123';
function translate(code) {
    const option = {
        url: "http://localhost:3000/find",
        method: "POST",
        json: true,
        // body: {'code': code}
    };
    request(option, function (error, response, body) {
        // console.log(body);
        console.log(typeof body);
        console.log(body);
    });
}
translate(code);