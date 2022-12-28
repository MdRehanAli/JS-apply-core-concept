function milesToKm(miles) {
    const kilometer = miles * 1.6
    const kilometers = kilometer.toFixed(2);
    return kilometers;
}

var miles = 121;
var killos = milesToKm(miles);
console.log(miles, 'miles is =', killos, 'kilometers');

var miles = 150;
var killos = milesToKm(miles);
console.log(miles, 'miles is =', killos, 'kilometers');
