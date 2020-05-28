class Node {
    constructor(val) {
        this.value = val;
        this.edges = [];
    }
}

class Graph {
    constructor(undirected = false) {
        this.undirected = undirected;
        this.nodes = [];
    }

    addNode(value) {
        this.nodes.push(new Node(value));
    }
}