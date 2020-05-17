export default class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item)
    }

    dequeue() {
        this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    get length() {
        return this.queue.length
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    peek() {
        return this.queue[0];
    }
}

