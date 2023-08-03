
function asyncFunction(data, callback) {

    console.log('timer about to run for 2000 ms')
    setTimeout(() => {

        var createRandomError = 3 > 2 ? new Error('Error due to randomness') : null

        if (createRandomError) {
            console.error(createRandomError.message)
            callback(createRandomError)
        } else {
            console.log(`asyncFunction with data ${data} runs after 2 seconds.`)
            callback()
        }
    }, 2000)

}

function print(error, somevalue) {
    if (error) { throw new Error('new Error while printing') }
    console.log('~~~print~~~')
}

asyncFunction('[hello]', (errA) => {
    if (errA) {
        console.log(errA.message)
    } else {
        asyncFunction("[there]", () => asyncFunction('[, this is data]', print))
    }
}
)

// asyncfunction sends data which after 2 seconds gets used and then the callback fires. Callback happens to be the same function with different data. This new data gets used after 2 seconds and then the callback fires which is print()

// expected output without error handling: ///

// timer about to run for 2000 ms
// asyncFunction with data [hello] runs after 2 seconds.

// timer about to run for 2000 ms
// asyncFunction with data [there] runs after 2 seconds.

// ~~~print~~~