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


// var canFinish = function(numCourses, prerequisites) {

//     // const graph = buildAdjList(numCourses, prerequisites)
    
//     let graph = Array(numCourses).fill(0).map( () => [])
    
//     // iterate over edges[][]; use 0th element as index and 1th element as value in the subarray
//     // for(const [course, prereq] of prerequisites){ 
//         // this does not populate the graph[]; is the destructuring assignment not worked?
//         // graph[course].push[prereq] // issue: using [] instead of ()
//         // }

//     for(let edge of prerequisites){
//         let [course, prereq] = edge
//         graph[prereq].push(course)
//     }

//     console.log(graph)

//     // array to track visited nodes // index will match the course 
//     const visited = Array(numCourses).fill(0)
    
//     // array to store topologically sorted order
//     // const result = []

//     // helper function for DFS
//     function dfs(node) {
//         // checks if node has already been visited, indicating a cycle
//         if (visited[node] === 1) return true
//         if (visited[node] === 1) return false

//         // mark the node's index as true to indicate visited
//         visited[node] = true 

//         // visit the prerequiste course to check if they have been visited; False will be returned from the recursive call if node has been visited and thus for loop will end with false
//         for(const prerequisite in graph[node]){
//             if(dfs(prerequisite)) return true
//         }

//         // result.push(code)

//         visited[node] = false

//         return false
//     }

//     // perform DFS on all nodes
//     for (let i=0; i<numCourses; i++){
//         if (!dfs(i)) return false
//     }

// };

/*
    return TRUE if all courses can be completed; False otherwise (i.e. if there's a cycle between courses)
*/
var canFinish = function(numCourses, prerequisites) { 

    /* 
    Array to track courses that have been visited
     0 - unvisited
     1 - visiting
     2 - visited 
    
    Indices corresponds to courses
    */
    var visited = Array(numCourses).fill(0)

    // Adjacency list to represent graph
    const graph = Array(numCourses).fill(0).map( () => [])

    /* index represents course and elements at index represent dependent courses 
    
       for prerequisites = [[0,1],[0,2], [1,3], [1,4], [3,4]]
       graph = [ [], [ 0 ], [ 0 ], [ 1 ], [ 1, 3 ] ]
        
       Explanation:
       course 0 shows up in 1th and 2nd === course 1 & 2 need to be completed before course 0
       course 1 shows up in 3rd === course 1 needs to happen before course 3
       course 1 & 3 show up in 4th === course 4 needs to happen before  
    */
    for(const [course, prereq] of prerequisites) {
        graph[prereq].push(course)
    }

    /* depth first search to detect cycle for the course;
        Course will first be check if its being visited or has already been visited (cycle exists)

        Then mark the course as visiting
        Then use the course to pull dependent courses via for loop and recursively call DFS on them
        If the DFS on prerequistes return True (i.e. course is only being visited), then mark the course itself as visited and return false  
    */
    function dfs(course){

        if(visited[course] === 1) return true
        if(visited[course] === 2) return false

        visited[course] = 1

        for(let prereq of graph[course]) {
            if(dfs(prereq)) return true
        }

        visited[course] = 2

        return false
    }

    // for every course, if course has not been visited AND dfs() is TRUE, return false
    for (let i =0; i < numCourses; i++) {
        if (visited[i] === 0 && dfs(i)){
            return false
        }
    }

    return true
    
}

 var numCourses = 5
//  var prerequisites = [[0,1],[0,2], [1,3], [1,4], [3,4]]
 var prerequisites = [[1,0],[0,1]]
 
console.log(canFinish(numCourses, prerequisites))

