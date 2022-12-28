// 1 * 2 * 3 * 4 * 5 * 6 * 7 

function multiplicationOfNumbers(number){
    let multiplication = 1;
    for(let i = 1; i <= number; i++){
        multiplication *= i;

    }
    return multiplication;
}

const result = 9;
const res = multiplicationOfNumbers(result);
console.log(res);