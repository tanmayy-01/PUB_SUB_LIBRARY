***Problem Statement :*** Design a Pub-Sub library which exposes the following functions:

- `Subscribe` : This method helps the client to subscribe to an `event` and whenever that `event` is triggered we executed a callback. It should return a method, which when called then it should unsubscribes to the `event`.

- `Publish` : This method helps to fire an `event` with some data. All the subscriber gets activated when we publish.

### Note:
1. Multiple entities can subscribe to the same `event`. Every entity will be subscribing with its own callback.

2. Different actions will be performed by each subscriber when a common `event` is fired.

3. One `event` -> has many subscribers