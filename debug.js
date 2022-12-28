function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= 7; i++) {
        factorial *= i;
    }
    return factorial;
}

const factor = 8;
const factorial = getFactorial(factor);
console.log('Factorial of', factor, '=', factorial);