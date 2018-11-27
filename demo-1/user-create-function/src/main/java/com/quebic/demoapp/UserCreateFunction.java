package com.quebic.demoapp;

import java.util.UUID;

import com.quebic.faas.runtime.CallBack;
import com.quebic.faas.runtime.Context;
import com.quebic.faas.runtime.RequestHandler;

public class UserCreateFunction implements RequestHandler<User, User>{

	public void handle(final User user, final CallBack<User> callBack, final Context context) {
		
		context.messenger().publish("UserValidate", user, s->{
			
			user.setId(UUID.randomUUID().toString());
			
			//time consuming operation
			//block for 8 seconds
			try {
				Thread.sleep(60 * 1000);
			} catch (InterruptedException e) {}
			
			callBack.success(201, user);
			
		}, e->{
				
			callBack.failure(e.statuscode(), e.error());
			
		});
		
	}

}
