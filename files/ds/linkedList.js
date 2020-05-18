class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    push(val) {
        const newNode = new Node(val);

        if(this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        } else if (this.length === 1) {
           const nodeToRemove = this.head;
           this.head = null;
           this.tail == null;
           this.length--;
           return nodeToRemove;
        } else {
            let nodeToRemove = this.tail;
            let head = this.head;
            let secondToLast;
            while(head) {
                if (head.next === this.tail) {
                    secondToLast = head;
                    break;
                }
                head = head.next;
            }
            secondToLast.next = null;
            this.tail = secondToLast;
            this.length--;
            return nodeToRemove;
        }
    }

    showNodeValues() {
        let head = this.head;
        let arr = [this.head.value]
        while (head.next) {
            arr.push(head.next.value)
            head = head.next;
        }
        return arr;
    }

    get(index) {
        if (index < 0 || index > this.length || this.isEmpty()) {
            return null;
        }

        if (index === 0) {
            return this.head;
        }

        if (index === this.length - 1) {
            return this.tail;
        }
        
        let currentNode = this.head;
        let iterator = 0;

        while(iterator < index) {
            iterator++;
            currentNode = currentNode.next;
        }

        return currentNode;
    }
    
}

let node = new LinkedList();
node.push(4);
// console.log('one node ',node)
node.push(7);
// console.log('two nodes ',node)
node.push(1);
node.push(19);
node.pop();
console.log('three nodes ', node, node.showNodeValues())
console.log('show index 2 ', node.get(2));
