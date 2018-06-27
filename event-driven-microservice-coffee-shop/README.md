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
* `quebic route create -f routes/order-place-route.yml`

* `quebic route create -f routes/order-fetch-route.yml`

# Setup EventBox
#### Run this commands to start eventbox
* `quebic eventbox start`

#### Run this curl to create new domain 
* `curl --request POST -H "Content-Type: application/json" --data '{"eventGroup":"orders", "name":"orders", "aggregateIdField":"id"}'  <eventbox-host:port>/api/domains`

#### Eventbox UI also provides way to create domains. Open `<eventbox-host:port>/domains` in your web browser.

# APIGateway Connection URI
#### Run this commands to get api-gateway connection uri
* `quebic api-gateway`

# Test Sample Application
## Plaece Order 
* `curl --request POST -H "Content-Type: application/json" --data '{"beanType":"bean_type_1"}'  <api-gateway-host:port>/orders`
* This will return created order with order-id.

## Fetch created order details by order-id
* `curl <api-gateway-host:port>/orders/{id}`

# EventBox domain events
## Inspect domain-events of orders domain 
* REST `curl <eventbox-host:port>/api/domains/orders/domain-events`
* UI `<eventbox-host:port>/domain-events?domainName=orders`

## Reproduce domain-event
* REST `curl <eventbox-host:port>/api/domains/orders/domain-events/reproduce?eventId=<domain-event-id>`
* UI
