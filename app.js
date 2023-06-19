// For exercise 1, we should be reading this here, not in the console.
console.log('Nope, not here :eyes:')

// Here is the app.js file

/*
 Exercise #2
 Stop the loop
 Tip : do not close your console as once you click the button it will be harder to open it
 When ready, click the "Exercise 2" button
*/
let looper = false;
const loop = () => {
    if (looper) {
        window.alert('I am a loop! Kill me!');
        setTimeout(loop, 500);
    }
}


/*
 Exercise #3
 Figure out why the following code is broken
 And how we can fix it
 Restrictions : This must only be called by refreshing the page
*/
const brokenFunc = () => {
    if (document.getElementById('exercise3').value === 'deez') {
        window.alert('You passed!');
    }
}
brokenFunc();

/*
 Exercise #4
 To solve this one, lets look at the object returned
 See why it is failing without peeking at any function definitions
 This exercise can be triggered via the button on the page
*/
const fixMeIdk1 = async () => {
    const stuffINeed = await fakeFetch()
    for (let i = 0; i < stuffINeed.length; i++) {
        console.log(stuffINeed[i].brewer)
    }
}

/*
 Exercise #5
 To solve this one, show me where we can see the response to this fetch
 And elaborate on what the failure is
 This exercise can be triggered via the button on the page
*/
const fixMeIdk2 = async () => {
    const stuffINeed = await fetch('https://urlthatdoesntexistt.com');

    console.log(stuffINeed.data);
}


// Beyond here are just utils, not relevant
const exercise2Btn = () => {
    looper = true;
    loop();
}
const exercise4Btn = () => {
    fixMeIdk1();
}
const exercise5Btn = () => {
    fixMeIdk2();
}


// Reading past here is cheating
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Scenarios 
// Scenario 1 : General location of resources
// Scenario 2 : loop gone mad, also could be useful if a page is using js to blur / hide its contents
// Scenario 3 : a value being referenced doesnt exist or isnt what we expected
// Scenario 4 : we are getting data back from an API and it isnt what we expected
// Scenario 5 : our API is broken/down/sending back something we didnt expect


async function fakeFetch(rejected = false) {
    return new Promise((resolve, reject) => {
        if (rejected) {
            return setTimeout(() => reject(''))
        }
        return setTimeout(() => {
            return resolve([{
                    brewer: 'moka'
                },
                {
                    brewer: 'FP'
                },
                undefined,
                {
                    brewer: 'chemex'
                }
            ])
        }, 5000)
    })
}
