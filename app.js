/*
Welcome!! This was a mini-project I put together to help expose more people to working in the Google Chrome Developer Tab. 
If you have any questions/comments/concerns you can find me at https://github.com/Linkinlog, hope to see you there!

The only restriction in these challenges is to not edit any code in the sources tab, these challenges are designed to have another way to solve them.(unless explictitly mentioned)
Each challenge should help get you more comfortable with placing breakpoints, modifying runtime values, and using the console to find/change values at runtime as well.
*/

/*
Secret functions
Obfuscated to "prevent" spoiling the challenges.
*/
import * as secrets from './secrets/secrets.js';
let looper = secrets.looper;

/* 
Exercise #1: Finders keepers
You will need to find the this file.

If you are reading this, then you passed #1! Welcome to the app.js file!
*/

/*
Exercise #2: Looper
This is a never ending loop, we need to stop it from running somehow.
Tip : do not close your console as once you click the button it will be harder to open it.
*/
function exercise2() {
    if (looper) {
        window.alert('I am a loop! Kill me!');
        setTimeout(exercise2, 500);
    };
};
document.getElementById("exercise-2-btn").addEventListener("click", exercise2);


/*
Exercise #3: You Passed! (Maybe)
This exercise will involve reading a conditional and figuring out why it is not evaluating as true, then making it be so.
Restrictions : This must only be called by refreshing the page
*/
function exercise3() {
    if (document.getElementById('exercise-3-btn').value === 'foo') {
        window.alert('You passed!');
    };
};
exercise3(); // Do not modify

/*
Exercise #4: Undefined Behavior
This exercise will involve looking at the object returned in the debugger.
See why it is failing without peeking at any function definitions.
*/
async function exercise4() {
    const returnObj = await secrets.fakeFetch();
    for (let i = 0; i < returnObj.length; i++) {
        console.log(returnObj[i].data);
    };
};
document.getElementById("exercise-4-btn").addEventListener("click", exercise4);

/*
Exercise #5: Blackout
To solve this one, you will need to find where we can see the response to this fetch and figure on what the failure is.
*/
async function exercise5() {
    const returnObj = await fetch('https://urlthatdoesntexistt.com');
    console.log(returnObj.data);
};
document.getElementById("exercise-5-btn").addEventListener("click", exercise5);

/*
Thanks for playing!
*/
