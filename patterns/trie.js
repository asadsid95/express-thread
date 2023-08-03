
// Trie is made up of nodes which has 0 or more children
class TrieNode {

    constructor() {
        this.children = {}
        this.endOfPath = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    add(string) {
        let node = this.root
        let size_string = 0
        for (let char of string) {
            // if node's children not in trie as node , create a node 
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            // shift node: update node to current node's children which is stored in an obj as property; char of string is the key
            node = node.children[char]
            size_string++
        }
        // string iteration will be finished so marking last node as endofpath is needed
        node.endOfPath = true

        // console.log(size_string)
    }

    search(string) {
        let node = this.root
        console.log(string)
        for (let char of string) {
            if (!node.children[char]) {
                return false // string is not in trie such its characters are not in trie
            }
            node = node.children[char]

        }
        return node.endOfPath
    }

}

var new_Trie = new Trie()
new_Trie.add('elephant')

console.log(new_Trie.search('elephant'))


const word_table = {
    'apple': 'apple',
    'banana': 'banana',
    'candy': 'candy'
}

// console.log(word_table.hasOwnProperty('apple'))