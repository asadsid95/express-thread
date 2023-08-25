/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    var prev = None
    var curr = head
    
    while(curr !== None){
        
        var temp =curr.next //temporary storage for next node's id
        curr.next = prev // turning the link to point behind
        prev = curr // updating prev to be the current node
        curr = temp // updating to be next node's value
    }

    return prev // since prev will be updated to be the current node, it will become the last node of the original linkedlist thereby the first node of the reversed list
};