package com.quebic.demoapp;

import java.util.UUID;

import com.quebic.faas.runtime.CallBack;
import com.quebic.faas.runtime.Context;
import com.quebic.faas.runtime.RequestHandler;

public class UserCreateFunction implements RequestHandler<User, User>{

	public void handle(final User user, final CallBack<User> callBack, final Context context) {
		
		context.messenger().publish("users.UserValidate", user, s->{
			
			user.setId(UUID.randomUUID().toString());
			
			callBack.success(201, user);
			
		}, e->{
				
			callBack.failure(e.statuscode(), e.error());
			
		}, 1000 * 8);
		
	}

}
