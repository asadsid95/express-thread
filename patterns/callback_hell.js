
function asyncFunction(data, callback) {

    console.log('timer about to run for 2000 ms')
    setTimeout(() => {
        console.log(`asyncFunction with data ${data} runs after 2 seconds.`)
        callback()

    }, 2000)

}

function print() {
    console.log('~~~print~~~')
}

asyncFunction('[hello]', () =>
    asyncFunction("[hello]", print)
)