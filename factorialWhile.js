function factorial(number) {
    let fact = 1;
    let i = 1;
    while (i < number) {
        i++;
        fact *= i;

    }
    return fact;

}

let result = 4;
let res = factorial(result);
console.log('Factorial of', result, '=', res);


// factorial Reverse with While loop 

function factorialReverse(numbers) {
    let fact = 1;
    let i = numbers;
    while (i >= 1) {
        fact *= i;
        i--;
    }

    return fact;

}

let results = 6;
let rest = factorialReverse(results);
console.log('Factorial of', results, '=', rest);



