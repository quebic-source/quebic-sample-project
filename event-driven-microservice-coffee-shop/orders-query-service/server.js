var http = require('http');

http.createServer(function (req, res) {
    
    const dummy_data = [
        { orderId: 1001, status: 'Accepted', },
        { orderId: 1002, status: 'Placed', },
        { orderId: 1003, status: 'Canceled', reason: 'Not enugh beans' },
        { orderId: 1004, status: 'Finished', },
        { orderId: 1005, status: 'Deleveried', },
    ];
    res.write(JSON.stringify(dummy_data));
    res.end();

}).listen(8080);