// 11.
let marks = 85;
let grade;
if (marks >= 90)
    grade = 'A'
else if (marks >= 80)
    grade = 'B'
else if (marks >= 70)
    grade = 'C'
else if (marks >= 60)
    grade = 'D'
else
    grade = 'F'
console.log ('GRADE:'+ ' ' +  grade)
 

// 12.
let length = 5;
let width = 10;
let area = length * width;
let perimeter = 2 * (length + width)
console.log('area:' + ' ' + area)
console.log('perimeter:' + ' ' + perimeter)

// 13.
let year = 2024;
if ((year % 4 === 0 && year % 100 == 0)||(year % 400 ===0))
    console.log(year + ' ' + 'is a leap year')
else
  console.log(year + ' ' + 'is not a leap year')

// 14.
let nuumber = 47;
if (number % 3 === 0 && number % 5 === 0) 
    console.log('Divisible by both 3 AND 5') 
 else if (number % 3 === 0) 
    console.log ('Divisible by 3 only')
 else if (number % 5 === 0) 
    console.log('Divisible by 5 only')
 else 
    console.log('Divisible by neither 3 nor 5')


// 15.
let subject1 = 78;
let subject2 = 85;
let subject3 = 92;
let average = (subject1 + subject2 + subject3) / 3;
if (average >= 90)
  console.log('Excellent')
else if (average >= 75)
     console.log('Good')
else if (average >= 60)
     console.log('Average')
    else
        console.log('Needs Improvement')



