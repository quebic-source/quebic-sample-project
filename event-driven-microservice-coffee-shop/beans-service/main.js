const beans_store = {};

initBeansStore();

exports.handler = function (payload, context, callback) {

    if (context.eventID == 'orders.OrderPlaced') {

        if(validateBean(payload.beanType)){
            publishEvent('orders.OrderBeanValidated', payload, context);
        }

    } else{
        fetchBean(payload.beanType);
    }
    
}

function initBeansStore(){
    beans_store['bean_type_1'] = {ammount:3};
    beans_store['bean_type_2'] = {ammount:5};
    beans_store['bean_type_3'] = {ammount:2};
    beans_store['bean_type_4'] = {ammount:4};
    beans_store['bean_type_5'] = {ammount:1};
}

function validateBean(beanType){
    
    const bean = beans_store[beanType];

    if( bean == undefined || bean.ammount == 0 ){
        return false;
    }

    return true;

}

function fetchBean(beanType){
    
    const bean = beans_store[beanType];

    if( bean == undefined || bean.ammount == 0 ){
        return
    }

    bean.ammount = bean.ammount - 1;

}

function publishEvent(type, payload, context){
    context.messenger().publish(type, payload);
}