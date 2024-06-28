***Problem Statement :*** Design a Pub-Sub library which exposes the following functions:

- `Subscribe` : This method helps the client to subscribe to an event and whenever that event is triggered we executed a callback. It should return a method, which when called then it should unsubscribes to the event.

- `Publish` : This method helps to fire an event with some data. All the subscriber gets activated when we publish.