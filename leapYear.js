function leapYear(years) {
    if (years % 4 == 0) {
        return true;
    }
    else {
        return false;
    }


}

var years = 1989;
var year = leapYear(years);
console.log(year);

var years = 1980;
var year = leapYear(years);
console.log(year);

var years = 2000;
var year = leapYear(years);
console.log(year);



