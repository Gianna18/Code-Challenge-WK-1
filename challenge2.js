// Code Challenge 2
/*function speedLimit(speed){
    for (let i = speed, points = 1; i >= 70; i +=5, points++);
        console.log(i)
        if(speed <=69) {
            console.log ("Ok");
            } else if(speed >=135) {
                return ("License suspended");
            }
    }
   */

// Use IF STATEMENT and the prompt Keyword to find out how many point(s) the user has for going above the speed limit.
// Declare the Function

function checkSpeed() {
if (speed <=70) {
    console.log("Ok");
} else if (speed >= 135) {
    console.log('License suspended')
} else if(speed > 70) {
    let points = (speed - 70) /5;
    console.log(`Points:${points}`)
}
}
let speed = prompt("Input speed");
checkSpeed()