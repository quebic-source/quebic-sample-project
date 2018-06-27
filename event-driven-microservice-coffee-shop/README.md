# Setup Quebic into your envirnment
#### [Follow these instructions](https://github.com/quebic-source/quebic#getting-started)
#### Run Quebic manager
* run `./quebic-mgr`
* Note: Make sure Docker and  kubernetes are configured and running in your environment.

# Create Functions
#### Run these commands for create functions
* `quebic function create -f orders-command-service/function_spec.yml`

* `quebic function create -f orders-query-service/function_spec.yml`

* `quebic function create -f beans-service/function_spec.yml`

* `quebic function create -f barista-service/function_spec.yml`

# Config Routes
#### Run these commands for config routes
* `quebic-faas-cli route create -f routes/order-place-route.yml`

* `quebic-faas-cli route create -f routes/order-fetch-route.yml`

# Setup EventBox
#### Run this commands to start eventbox
`quebic eventbox start`

#### Run this curl to create new domain 
`curl --request POST -H "Content-Type: application/json" --data '{"eventGroup":"orders", "name":"orders", "aggregateIdField":"id"}'  <eventbox-host:port>/api/domains`

##### Note: Eventbox UI also provides way to create domains. Open `<eventbox-host:port>/domains` in your web browser.

# order-places
curl --request POST -H "Content-Type: application/json" --data '{"beanType":"bean_type_3"}'  10.104.44.127:3000/demo/orders

# order-fetch
curl 10.104.44.127:3000/demo/orders/{id}

# eventbox ui
open this in browser http://10.107.174.101:8080/domains

# domain events
open this in browser http://10.107.174.101:8080/domain-events?domainName=orders

# reproduce
