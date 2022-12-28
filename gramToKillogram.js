function gramToKilogram(grams) {
    const kilogram = grams / 1000;
    const kilograms = kilogram.toFixed(2);
    return kilograms;
}

var gram = 25500;
var killos = gramToKilogram(gram);
console.log(gram, 'grams is =', killos, 'killograms');

var gram = 26660;
var killos = gramToKilogram(gram);
console.log(gram, 'grams is =', killos, 'killograms');

