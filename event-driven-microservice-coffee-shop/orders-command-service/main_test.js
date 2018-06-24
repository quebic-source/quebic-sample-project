const main = require('./main.js');

main.handler({status: 'Finished', }, {eventID:'request.OrderPlaced'}, callback);
main.handler({id:1001, status: 'Finished', }, {eventID:'request.OrderPlaced'}, callback);

function callback(err, success, code){
    console.log('err', err);
    console.log('success', success);
    console.log('code', code);
}