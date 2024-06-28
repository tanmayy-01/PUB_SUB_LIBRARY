class PubSub {

    constructor() {
        this.subscribers = {}   // { 'eventName' : [cb_subs1, cb_subs2,...]}
    }

    /**
     * @param event -> It is a string denoting unique event fired
     * @param callback -> For a subscriber what method should be executed when an event is fired.
     */

    subscribe(event, callback) {
        if(!this.subscribers[event]) {
            // Currently no subscriber callback war registerd for the event
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);

        return () => {
            this.unSubscribe(event,callback);
        }
    }

    unSubscribe(event, callback) {
        if(!this.subscribers[event]) return;
        this.subscribers[event] = this.subscribers[event].filter(cb => cb !== callback);
    }

    /**
     * @param event -> It is a string denoting unique event fired
     * @param data -> For the given event what should be passed along with publishing the event.
     */

    publish(event, data) {
        if(!this.subscribers[event]) return;
        this.subscribers[event].forEach(callback => callback(data));
    }
}

const pb = new PubSub();

const unSubscriber_NIKE_1 = pb.subscribe('Nike', (data) => console.log('Subscriber_1 of Nike',data))
const unSubscriber_NIKE_2 = pb.subscribe('Nike', (data) => console.log('Subscriber_2 of Nike',data))
const unSubscriber_PUMA_3 = pb.subscribe('Puma', (data) => console.log('Subscriber_3 of Puma',data))

pb.publish('Nike', {ShoeName: 'NIKE', Price: 1500})
pb.publish('Puma', {ShoeName: 'PUMA', Price: 1300})

unSubscriber_NIKE_1();

pb.publish('Nike', {ShoeName: 'NIKE', Price: 1500})