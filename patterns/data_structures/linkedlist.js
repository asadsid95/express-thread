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
var fourth = new Node(4)

var list = new LinkedList(first)
var list_null = new LinkedList()

first.next = second
second.next = third
third.next = fourth

// console.log(list)

// get size of LL

function size(list) {


    var counter = 0

    curr = list.head

    while (curr.)

}

size(list)

// How to traverse?

function traversing_LL(list) {

    var show_array = []

    // for (let i = 0; i < 10; i++) {
    while (list.head.element !== null) {
        var curr = list.head.element
        var next = list.head.next

        show_array.push(curr)

        curr = next
        console.log(curr)

        return true
    }

    console.log(show_array)

}

// traversing_LL(list)

// LinkedList {
//   head: Node { element: 1,
//    next: Node { element: 2,
//    next: [Node] } }
//     }

