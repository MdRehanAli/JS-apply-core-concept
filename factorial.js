// 1 * 2 * 3 * 4 * 5 * 6 * 7 

function factorial(number) {
    let multiplication = 1;
    for (let i = 1; i <= number; i++) {
        multiplication *= i;

    }
    return multiplication;
}

const result = 3;
const res = factorial(result);
console.log(res);



// reverse factorial 

function reverseFactorial(number) {
    let mult = 1;
    for (let i = number; i >= 1; i--) {
        mult *= i;
    }

    return mult;
}

const result1 = 4;
const result2 = reverseFactorial(result1);
console.log(result2);