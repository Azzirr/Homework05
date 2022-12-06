// Ex 11
/*
function helloAfter(sec){
    console.log(`Hello after ${sec} seconds!`)
}
setTimeout(helloAfter, 4000, '4');
setTimeout(helloAfter, 8000, '8');
*/
// Ex 12

function helloFiveTimes(delay, reps){
    let x = 0;
    let log = setInterval(() => {
        if(++x === reps){
            clearInterval(log)
        } console.log('Hello!')
        if(x === reps){
            console.log('Finish!')
        }
    }, delay);
}
// helloFiveTimes(1000, 5)

function helloX(){
    let counter = 0;
    const myFunction = function() {
        counter += 1000;
        console.log('Hello ' + (counter / 1000))
        setTimeout(myFunction, counter);
    }
    setTimeout(myFunction, counter);
}
helloX()
