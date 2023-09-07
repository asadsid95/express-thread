/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
  // Recursive approach

  // if(!p  && !q) return true
  // if(!p || !q) return false
  // if(p.val !== q.val) return false
  
  // return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right))

  // solution with stack

  if(!p && !q) return true 
  if(!p || !q) return false

  let first_stack = [p]
  let second_stack = [q]

  while (first_stack.length > 0 && second_stack.length > 0) {

    let first_node = first_stack.pop()
    let second_node = second_stack.pop()

    if(!first_node && !second_node) continue; // if both are empty, continue
    if( (!first_node || !second_node) || (first_node.val !== second_node.val) ) return false // if either are empty OR values dont match, return false

    first_stack.push(first_node.left)
    first_stack.push(first_node.right)
    second_stack.push(second_node.left)
    second_stack.push(second_node.right)
  }

  return true



};