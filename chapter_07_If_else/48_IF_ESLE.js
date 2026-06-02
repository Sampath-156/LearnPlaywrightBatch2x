//Prog 01

let number = 7;

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

//Prog 02 - Student Grade Calculator

let score = 85;

if (score > 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}

//Prog 03 - Leap Year Checker

let year = 2020;    

if ((year % 4 === 0 && (year % 100 !== 0)) || year % 400 === 0)  {
    console.log("The year is a leap year.");
} else {
    console.log("The year is not a leap year.");
}   



//Prog 04 - HTTP Status Checker