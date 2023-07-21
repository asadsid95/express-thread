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

// How to traverse?

function looping(list) {

    var show_LL_array = []

    while (list.head !== null) {
        var curr = list.head.element
        var next = list.head.next

        show_LL_array.push(curr)

        curr = next

    }

    console.log(show_LL_array)

    console.log('returning false')
    return false

}

// looping(list_null)
// looping(list)



// LinkedList {
//   head: Node { element: 1,
//    next: Node { element: 2,
//    next: [Node] } }
//     }

