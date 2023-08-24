var cloneGraph = function(node) {
    
};


class Node{
    constructor(val){
        this.val = val
    }
}

first_node = new Node(4)

// console.log(first_node)

// creating undirected graph
class Graph{
    
    constructor() {
        this.nodes = new Map()
    }

    addNode(node) {
        if (!this.nodes.has(node)) {
            this.nodes.set(node, [])
        }
    }

    addEdge(node1, node2){
        if(!this.nodes.has(node1) || !this.nodes.has(node2)) {
            throw new Error("Both nodes must exist in the graph")
        }

        this.nodes.get(node1).push(node2)
        this.nodes.get(node2).push(node1)
    }

    getNeighbors(node){
        if(!this.nodes.has(node)){
            throw new Error(`${node} does not exist in the graph, please add it and try again`)
        }

        return this.nodes.get(node)

    }
}

new_graph = new Graph()

new_graph.addNode(3)
new_graph.addNode(4)
new_graph.addNode(5)
new_graph.addNode(6)
// console.log(new_graph)

new_graph.addEdge(3, 4)
// console.log(new_graph)

console.log(new_graph.getNeighbors(5))
