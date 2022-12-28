// Write a function that will take hour as the input parameter and will convert it int minutes and will return the result in minutes 

function hours(minutes) {
    let hours = minutes / 60;
    return hours;
}

const minutes = 120;
const hour = hours(minutes);
console.log(minutes, 'minutes =', hour, 'hours.');


// Seconds to minutes 

function minute(seconds) {
    let minutes = seconds / 60;
    return minutes;
}

var Seconds = 5400;
var minute = minute(Seconds);
console.log(Seconds, 'seconds =', minute, 'minutes.');