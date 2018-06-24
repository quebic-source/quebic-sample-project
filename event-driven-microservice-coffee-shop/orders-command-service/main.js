exports.handler = function (payload, context, callback) {

    if (context.eventID == event_request_OrderPlaced) {
        placeOrder(payload, context, callback)
    } else if (context.eventID == event_OrderBeanValidated) {
        acceptOrder(payload, context, callback)
    } else if (context.eventID == event_CoffeeBrewStarted) {
        startOrder(payload, context, callback)
    } else if (context.eventID == event_CoffeeBrewFinished) {
        finishOrder(payload, context, callback)
    } 

}

function placeOrder(order, context, callback) {
    
    const id = generateUUID();
    
    order['id'] = id;
    order['status'] = status_placed;
    
    callback(null, order, 201);

    fireEvent(event_OrderPlaced, order);
}

function acceptOrder(order, context, callback) {

    order['status'] = status_accepted;

    fireEvent(event_OrderAccepted, order);

}

function startOrder(order, context, callback) {

    order['status'] = status_started;

    fireEvent(event_OrderStarted, order);
    
}

function finishOrder(order, context, callback) {

    order['status'] = status_finished;

    fireEvent(event_OrderFinished, order);
    
}

function fireEvent(context, type, payload){
    context.messenger().publish(type, payload);
}

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};

const event_OrderBeanValidated = 'orders.OrderBeanValidated';
const event_CoffeeBrewStarted = 'orders.CoffeeBrewStarted';
const event_CoffeeBrewFinished = 'orders.CoffeeBrewFinished';
const event_OrderPlaced = 'orders.OrderPlaced';
const event_OrderAccepted = 'orders.OrderAccepted';
const event_OrderStarted = 'orders.OrderStarted';
const event_OrderFinished = 'orders.OrderFinished';
const event_request_OrderPlaced = 'request.OrderPlaced';

const status_placed = 'PLACED';
const status_accepted = 'ACCEPTED';
const status_started = 'STARTED';
const status_finished = 'FINISHED';
