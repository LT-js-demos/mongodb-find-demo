const request = require('request');
describe('test', () => {
    it('find',() => {
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
            expect(body).toEqual('123');
        });
        // expect(body).toEqual('123');

    });
});
