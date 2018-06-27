exports.handler = function (payload, context, callback) {
    makeCoffee(payload, context);
}

function makeCoffee(payload, context){

    publishEvent(event_CoffeeBrewStarted, payload, context);

    console.log('making a coffee...');
    
    //time consuming operation
    setTimeout(args=>{
        finishCoffee(payload, context);
    }, 2 * 1000);

}

function finishCoffee(payload, context){
    publishEvent(event_CoffeeBrewFinished, payload, context);
}

function publishEvent(type, payload, context){
    console.log('publishEvent', type, context);
    //context.messenger().publish(type, payload);
}

const event_CoffeeBrewStarted = 'orders.CoffeeBrewStarted';
const event_CoffeeBrewFinished = 'orders.CoffeeBrewFinished';
