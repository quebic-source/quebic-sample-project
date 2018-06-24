const main = require('./main.js');

setTimeout(s => {
    main.handler({ id: 1001, status: 'Finished', }, { eventID: 'orders.OrderAccepted' }, callback);
    main.handler({ id: 1003 }, { eventID: 'request.OrderFetch' }, callback);

}, 3000);

function callback(err, success, code) {
    console.log('err', err);
    console.log('success', success);
    console.log('code', code);
}

function testserver() {
    
    var http = require('http');

    http.createServer(function (req, res) {

        const dummy_data = [
            { id: 1001, status: 'Accepted', },
            { id: 1002, status: 'Placed', },
            { id: 1003, status: 'Canceled', reason: 'Not enugh beans' },
            { id: 1004, status: 'Finished', },
            { id: 1005, status: 'Deleveried', },
        ];
        res.write(JSON.stringify(dummy_data));
        res.end();

    }).listen(8080);

}