class Stack {
    constructor () {
        this.stack = [];
    }

    length() {
        return this.stack.length
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        this.stack.pop();
    }
    
    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.length === 0;
    }


}

let test = new Stack();
// console.log(test.length());
test.push(1);
let what = test.isEmpty();
console.log(what)
// console.log(test.length());