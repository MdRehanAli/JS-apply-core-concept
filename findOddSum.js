function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum += element;
        console.log(index, element, sum);
    }
    return sum;

}

const myNumber = [12, 14, 35, 5, 39, 25, 16];
getSumOfAnArray(myNumber);



// Get Odd numbers In an Array 

function getOddNumbersInAnArray(numbers) {
    const oddNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
            oddNumbers.push(element);
        }


    }
    return oddNumbers;

}

const myNumbers = [12, 14, 35, 5, 39, 25, 16];
const oddNumbers = getOddNumbersInAnArray(myNumbers);
console.log(oddNumbers);

const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('odd Number sum:', oddNumberSum);

