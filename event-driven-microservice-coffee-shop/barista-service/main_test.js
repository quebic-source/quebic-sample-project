const main = require('./main.js');

main.handler({ id: 1001, status: 'ACCEPTED', beanType: 'bean_type_3' }, { eventID: 'orders.OrderAccepted' }, callback);

function callback(err, success, code) {
    console.log('err', err);
    console.log('success', success);
    console.log('code', code);
}