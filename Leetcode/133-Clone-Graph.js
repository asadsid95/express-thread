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

new_graph.addNode(1)
new_graph.addNode(2)
new_graph.addNode(3)
new_graph.addNode(4)
// console.log(new_graph)

new_graph.addEdge(1, 2)
new_graph.addEdge(1, 4)
new_graph.addEdge(2, 3)
new_graph.addEdge(3, 4)

// console.log(new_graph)

// console.log(new_graph.getNeighbors(4))

var cloneGraph = function(node=Noode) {
    
    var oldToNew = new Map()

    function dfs(node) {
        if(oldToNew.has(node)) {
            return oldToNew.get(node)
        }

        var copy =  new Noode(node.val)
        oldToNew.set(node, copy) // add the original and copy node in hash map

        for (const neighbor of node.neighbors) { // iterate over original node's neighbours as it is an array
            // console.log(neighbor)
            copy.neighbors.push(dfs(neighbor)) // add to copy-node's neighbor array

        } 
        return copy
    }

    return node ? dfs(node) : undefined
};


// Definition for a Node.
function Noode(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};


first_node = new Noode(1, [2,4])

console.log(first_node)

console.log(cloneGraph(first_node))