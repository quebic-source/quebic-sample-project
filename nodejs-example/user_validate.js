exports.validationHandler = function(payload, context, callback){
    
    context.logger().info('validation start');

    if(validateUser(payload)){

        context.logger().info('validation success');
        
        callback(null, true, 200);

    }else{

        context.logger().error('validation failed');

        callback(new Error('Not a valid e-mail address'), null, 400);

    }

}

function validateUser(user) {
    var email = user.email;

    if(email == undefined){
        return false;
    }

    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        return false;
    }
    
    return true
}
