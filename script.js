function Queue () {
    collection = [];
    this.print = () => {
        return collection;
    };

    this.enqueue = (element) => {
        collection.push(element);   // adds value to the end of the array.  First in, First Out
    };

    this.dequeue = () => {
        collection.shift();     // removes the first value of the array. First In, First Out.
    };

    // additional functions
    this.front = () => collection[0];
}

const q = new Queue();
console.log(q.print());                 // -=> []
q.enqueue(1);                           // adds 1 to the queue
console.log(q.print());                 // -=> [1]

q.enqueue(2);                           // adds 2 to the queue
console.log(q.print());                 // -=> [1,2]
console.log(`Front: ${q.front()}`);     // -=> 2

q.dequeue(2);                           // removes 1 from the queue
console.log(q.print());                 // -=> [2]



