//1. variable 
var myName = 'Rehan';

// Math operation: +, -, *, /
// Shorthand: +=, -+, *=, /=
// Increment / Decrement: ++, --

// 2. Array 
var friends = ['abul', 'babul', 'kabul', 'Rabiul', 'Shafiqul'];
console.log(friends);

var lengthFriends = friends.length;
console.log(lengthFriends);

var indexFriends = friends.indexOf('kabul');
console.log(indexFriends);

var ValueFriend = friends[2];
console.log(ValueFriend);

friends[2] = 'Iblul';
console.log(friends);

friends.pop();
console.log(friends);

friends.push('Rafiqul');
console.log(friends);

friends.shift();
console.log(friends);

friends.unshift('Sobdul');
console.log(friends);

var sliceArray = friends.slice(2, 4);
console.log(sliceArray);

// 3.conditionals 
// >, <, >=, <=, ==, ===, !=, !==

if (friends.length >= 4) {
    console.log('I have more than four friends.');
}
else {
    console.log('I have not more than four friends.');
}

// 4.loop 

var friend = 0;
while (friend < 4) {
    console.log(friend);
    friend++;
}

for (var i = 0; i <= 5; i++) {
    console.log(i);
}

// 5. function 

function newFunction(para1, para2) {
    var total = para1 + para2;
    return total;
}

var newFun = newFunction(10, 20);
console.log('Total =', newFun);

// Objects 

var bag = {
    brand: 'max',
    color: 'green',
    price: 1200,
    model: 'j21'
}

var keys = Object.keys(bag);
console.log(keys);

var values = Object.values(bag);
console.log(values);

if (keys.length == 4) {
    console.log('The length is absolutely 4');
}
else {
    console.log('The array length is not exactly 4.');
}

console.log(bag);
var keys = bag.brand
console.log(keys);

var keys1 = bag['color'];
console.log(keys1);

var keys2 = 'price';
var keys3 = [keys2];
console.log(keys3);

bag.model = 'g47';
console.log(bag.model);




/* **************
Peter's school teacher asked him to write a program that would return true if a number is even and false if a number is odd. Help Peter write the program. 
************** */

function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        console.log(number, 'is an even number')
    }
    else {
        console.log(number, 'is an odd number.');
    }

    return isEvenOrOdd;
}

isEvenOrOdd(98);




// Feet Inches

const myHeightInches = 66;
const myHeight = myHeightInches / 12;
console.log(myHeight);

const herHeightInches = 62;
const herHeight = herHeightInches / 12;
const height2 = herHeight.toFixed(2);
console.log('Her height is', height2);

const myGrandpasHeightInches = 68;
const myGrandpasHeight = 68 / 12;
const height3 = myGrandpasHeight.toFixed(2);
console.log('My Grandpas height is', height3);




