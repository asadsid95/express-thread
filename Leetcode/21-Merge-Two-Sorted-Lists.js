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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    var new_head = new ListNode()
    var traverse = new_head


    if(list1 === null) {
        return list2
    } else if (list2 === null) {
        return list1
    }

    while (list1 && list2){
        
        if(list1.val <= list2.val){
            new_head.next = list1;
            list1 = list1.next
        } else {
            new_head.next = list2;
            list2 = list2.next
        }

        new_head = new_head.next
    }

    if (list1) {
        new_head.next = list1
    } else {
        new_head.next = list2
    }

    return traverse.next

};

mergeTwoLists([1,2,4], [1,3,4])