const http = require('http');

const query_data_store = {};
fetchLatestPayloads();

exports.handler = function (payload, context, callback) {

    if (context.eventID == 'request.OrderFetch') {

        const order = fetchQueryData(payload.orderId);
        if (order == undefined) {
            callback(new Error('Unable to found order'), null, 404);
        } else {
            callback(null, order, 200);
        }

    } else {
        saveQueryData(payload);
    }

}

function fetchQueryData(orderId) {
    return query_data_store[orderId];
}

function saveQueryData(order) {
    query_data_store[order.orderId] = order;
}

function fetchLatestPayloads() {

    const eventbox_conn_str = process.env['eventbox.conn_str'];
    const domain_name = 'orders';

    //<eventbox_conn_str>/api/domains/<domain_name>/domain-events/latest-payloads
    const endpoint = eventbox_conn_str + '/api/domains/' + domain_name + '/domain-events/latest-payloads'

    http.get(endpoint, (resp) => {

        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {

            const orders = JSON.parse(data);

            orders.forEach(order => {
                saveQueryData(order);
            });

        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}
