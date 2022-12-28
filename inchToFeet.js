const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

const herInches = 144;
const herFeet = herInches / 12;
console.log('Her height', herFeet);

const GrandpasInches = 72;
const GrandpasFeet = GrandpasInches / 12;
console.log('Grandpas height', GrandpasFeet);


// Inches to Feets in Function 

function heightFeet(heightInches) {
    var heightFeet = heightInches / 12;
    var heightFeets = heightFeet.toFixed(2);
    return heightFeets;

}

const inches = 72;
const feet = heightFeet(inches);
console.log('His height in Feet =', feet);

const rehanInches = 65;
const rehanFeet = heightFeet(rehanInches);
console.log('My height in Feets =', rehanFeet);


