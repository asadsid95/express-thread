
class LinkedList {

    constructor(head = null) {

        this.head = head
    }

    size() {

        var count = 0

        var data = this.head

        while (data) {
            count++
            data = data.next
        }
        console.log(count)
    }

    addNode(node) {
        this.head.next = node.data
        this.head.data = node.data

        console.log("head: " + this.head.next)
    }
}

class Node {

    constructor(data) {
        this.data = data
        this.next = null
    }
}

var first = new Node(1)
var second = new Node(2)
var third = new Node(3)
var fourth = new Node(4)

// first.next = second
// second.next = third
// third.next = fourth

const list = new LinkedList(first)
// list.size()
list.addNode(second)
list.addNode(third)
list.addNode(fourth)

console.log(list)

function size(list) {

    var count = 0

    var head = list.head

    while (head) {
        count++
        head = head.next

    }

    console.log(count)
}

// size(list)