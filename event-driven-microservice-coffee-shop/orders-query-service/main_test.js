const main = require('./main.js');
main.handler({orderId:1001, status: 'Finished', }, {eventID:'orders.OrderAccepted'}, callback);
main.handler({orderId:1001}, {eventID:'request.OrderFetch'}, callback);


function callback(err, success, code){
    console.log('err', err);
    console.log('success', success);
    console.log('code', code);
    console.log('\n\n');
}