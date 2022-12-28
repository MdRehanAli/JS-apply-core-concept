// Write a function findLeapYear() that will take the array [2023, 2024, 2025, 2028, 2030] as the input parameter and will check if each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result. 

// function findLeapYear(years) {
//     const leapYears = [];
//     for (let i = 0; i < years.length; i++) {
//         const index = i;
//         const element = years[index];

//         if (element % 4 == 0) {
//             leapYears.push(element);
//         }
//         else{
//             // leapYears.push(element);
//         }
//     }
//     return leapYears;

// }

// const years = [2023, 2024, 2025, 2028, 2030];
// const year = findLeapYear(years);
// console.log(year);


function leapYears(years) {
    const leapYears = [];
    for (let i = 0; i < years.length; i++) {
        const index = i;
        const element = years[index];

        if (element % 4 == 0) {
            leapYears.push(element);
        }
        else {
            // leapYears.push(element);
        }

    }
    return leapYears;

}

const years = [2023, 2024, 2025, 2028, 2030];
const year = leapYears(years);
console.log(year);