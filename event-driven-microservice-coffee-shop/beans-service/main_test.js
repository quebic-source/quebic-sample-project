const main = require('./main.js');

main.handler({ id: 1001, status: 'Placed', beanType: 'ac' }, { eventID: 'orders.OrderPlaced' }, callback);

main.handler({ id: 1001, status: 'Placed', beanType: 'bean_type_3' }, { eventID: 'orders.OrderPlaced' }, callback);
main.handler({ id: 1001, status: 'Placed', beanType: 'bean_type_3' }, { eventID: 'orders.CoffeeBrewStarted' }, callback);

main.handler({ id: 1001, status: 'Placed', beanType: 'bean_type_3' }, { eventID: 'orders.OrderPlaced' }, callback);
main.handler({ id: 1001, status: 'Placed', beanType: 'bean_type_3' }, { eventID: 'orders.CoffeeBrewStarted' }, callback);

main.handler({ id: 1001, status: 'Placed', beanType: 'bean_type_3' }, { eventID: 'orders.OrderPlaced' }, callback);

function callback(err, success, code) {
    console.log('err', err);
    console.log('success', success);
    console.log('code', code);
}