exports.validationHandler = function(payload, context, callback){
    
    if(validateUser(payload)){
        
        callback(null, true, 200);

    }else{

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
