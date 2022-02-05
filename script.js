function Queue () {
    collection = [];
    this.print = function() {
        return collection;
        // console.log(collection);
    };

    this.enqueue = (element) => {
        collection.push(element);
    }
}

const q = new Queue();
console.log(q.print()); // -=> []
q.enqueue(1);           // adds 1 to the queue
console.log(q.print()); // -=> [1]

q.enqueue(2);           // adds 2 to the queue
console.log(q.print()); // -=> [1,2]