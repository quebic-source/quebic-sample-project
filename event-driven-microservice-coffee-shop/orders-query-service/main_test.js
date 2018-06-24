const main = require('./main.js');

setTimeout(s=>{
    main.handler({orderId:1001, status: 'Finished', }, {eventID:'orders.OrderAccepted'}, callback);
    main.handler({orderId:1003}, {eventID:'request.OrderFetch'}, callback);

}, 3000);

function callback(err, success, code){
    console.log('err', err);
    console.log('success', success);
    console.log('code', code);
}