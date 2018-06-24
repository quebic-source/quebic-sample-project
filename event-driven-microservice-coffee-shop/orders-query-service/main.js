const query_data_store = {};
fetchLatestPayloads();

exports.handler = function(payload, context, callback){

    if(context.eventID == 'request.OrderFetch'){
        
        const order = fetchQueryData(payload.orderId);
        if(order == undefined){
            callback(new Error('Unable to found order'), null, 404);
        }else{
            callback(null, order, 200);
        }

    }else{
        saveQueryData(payload);
    }

}

function fetchLatestPayloads(){

    const dummy_data = [
        {orderId:1001, status: 'Accepted', },
        {orderId:1002, status: 'Placed', },
        {orderId:1003, status: 'Canceled', reason: 'Not enugh beans'},
        {orderId:1004, status: 'Finished', },
        {orderId:1005, status: 'Deleveried', },
    ];

    dummy_data.forEach(order=>{
        saveQueryData(order);
    });

    console.log('init', query_data_store);
    console.log('\n\n');

}

function fetchQueryData(orderId){
    console.log('before fetchQueryData', query_data_store);
    return query_data_store[orderId];
}

function saveQueryData(order){
    console.log('before saveQueryData', query_data_store);
    query_data_store[order.orderId] = order;
}

//context.logger().info('validation success');
//callback(null, true, 200);
//callback(new Error('Not a valid e-mail address'), null, 400);