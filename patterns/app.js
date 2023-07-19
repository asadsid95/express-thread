// creates node for linked-list
class Node {

    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {

    constructor(head = null) {
        this.head = head
    }
}

var first = new Node(1)
var second = new Node(2)
var third = new Node(3)

var list = new LinkedList(first)

first.next = second
second.next = third

console.log(list)