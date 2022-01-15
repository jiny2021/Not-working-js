# Not-working-js
console.log("If you don't know how to use this, look below")
const fakeRequest = (url,success,failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500
    setTimeout(() => {
        if (delay > 4000) {
            failure("Cannot access data from url. Try again next time. :(")
        }
        else {
            success(`Here is your fake request from ${url}! :)`)
        }
    }, delay)
}
const fakePromise = (url) => {
    return new Promise((resolve,reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500
        if (delay > 4000) {
            reject("Cannot access data from url. Try again next time. :(")
        }
        else {
            resolve(`Here is your fake request from ${url}! :)`)
        }
    }, delay)
}
fakeRequest("books.com/page1",
    function(response) {
        console.log("It worked!");
        console.log(response);
        fakeRequest("books.com/page2",
            function (response)
        )
    }, function (err) {
        console.log("Error!", err);
    }
)
