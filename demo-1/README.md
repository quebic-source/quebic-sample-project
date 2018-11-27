# Start quebic-manager start
* quebic manager start

# Start quebic-manager logs
* quebic manager logs

# Connect with quebic-manager
* quebic manager connect

# user-validate function
## create function
* quebic function create -f user-validate-function/function_spec.yml

## test function
* quebic function test -n user-validate --payload '{"email":"t1@gmail.com"}'
* curl http://[ingress-address]/users/validate?q=t1@gmail.com -H "Host: api.quebic.io"

# user-create function
## create function
* quebic function create -f user-create-function/function_spec.yml

## test function
* curl -v --request POST -H "Content-Type: application/json" --data '{"email":"t1@gmail.com", "name":"quebic"}'  http://[ingress-address]/users -H "Host: api.quebic.io"

## request track
* curl http://[ingress-address]/request-tracker/[request-id] -H "Host: api.quebic.io"

