/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

function buildAdjList(n, edges){

    // create an empty adjacency list; index corresponds to course and values (array) correspond to the prereq 
    let graph = Array(numCourses).fill(0).map( () => [])
    
    // iterate over edges[][]; use 0th element as index and 1th element as value in the subarray
    // for(const [course, prereq] of prerequisites){ 
        // this does not populate the graph[]; is the destructuring assignment not worked?
        // graph[course].push[prereq]
        // }

    for(let edge of edges){
        let [course, prereq] = edge
        graph[course].push(prereq)
    }
    
    console.log(graph)
    return graph
}


var canFinish = function(numCourses, prerequisites) {

    // const graph = buildAdjList(numCourses, prerequisites)
    
    let graph = Array(numCourses).fill(0).map( () => [])
    
    // iterate over edges[][]; use 0th element as index and 1th element as value in the subarray
    // for(const [course, prereq] of prerequisites){ 
        // this does not populate the graph[]; is the destructuring assignment not worked?
        // graph[course].push[prereq] // issue: using [] instead of ()
        // }

    for(let edge of prerequisites){
        let [course, prereq] = edge
        graph[prereq].push(course)
    }

    console.log(graph)

    // array to track visited nodes // index will match the course 
    const visited = Array(numCourses).fill(0)
    
    // array to store topologically sorted order
    // const result = []

    // helper function for DFS
    function dfs(node) {
        // checks if node has already been visited, indicating a cycle
        if (visited[node] === 1) return true
        if (visited[node] === 1) return false

        // mark the node's index as true to indicate visited
        visited[node] = true 

        // visit the prerequiste course to check if they have been visited; False will be returned from the recursive call if node has been visited and thus for loop will end with false
        for(const prerequisite in graph[node]){
            if(dfs(prerequisite)) return true
        }

        // result.push(code)

        visited[node] = false

        return false
    }

    // perform DFS on all nodes
    for (let i=0; i<numCourses; i++){
        if (!dfs(i)) return false
    }

};

 var numCourses = 5
 var prerequisites = [[0,1],[0,2], [1,3], [1,4], [3,4]]
 
console.log(canFinish(numCourses, prerequisites))

