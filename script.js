function Queue () {
    collection = [];
    this.print = function() {
        return collection;
        // console.log(collection);
    };
}

const q = new Queue();
console.log(q.print());