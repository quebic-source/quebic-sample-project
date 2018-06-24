const main = require('./main.js');

main.handler({ beanType:'b1' }, {eventID:'request.OrderPlaced'}, callback);
main.handler({ beanType:'b1' }, {eventID:'orders.OrderBeanValidated'}, callback);
main.handler({ beanType:'b1' }, {eventID:'orders.CoffeeBrewStarted'}, callback);
main.handler({ beanType:'b1' }, {eventID:'orders.CoffeeBrewFinished'}, callback);

function callback(err, success, code){
    console.log('err', err);
    console.log('success', success);
    console.log('code', code);
}