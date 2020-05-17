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
        return this.stack.length === 0;
    }


}

let test = new Stack();
// console.log(test.length());
test.push(1);
// console.log(test.length());