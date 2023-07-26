//--------------------
// This is a simulated rendering function that performs a CPU-intensive task synchronously
function renderView() {
    console.log("Rendering view started.");

    // Simulating a CPU-intensive task (calculating factorial)
    async function calculateFactorial(n) {
        if (n === 1) return 1;
        return n * calculateFactorial(n - 1);
    }

    // Simulate rendering multiple views
    for (let i = 0; i < 5; i++) {
        console.log(`View ${i} rendering started.`);
        const result = calculateFactorial(100000); // A very large number to make it CPU-intensive
        console.log(`View ${i} rendering completed.`);
    }

    console.log("Rendering view completed.");
}

// Simulate a request to render a view
// renderView();
// console.log("Request completed.");