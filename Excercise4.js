// 16.
let character = 'A';
if (character.toLowerCase() === character.toLocaleUpperCase())
    console.log('neither')
else if (character === character.toUpperCase())
    console.log('uppercase letter')
else
    console.log('lowercase letter')

// 17.
let driverAge = 25;
let hasLicense = true;
if (driverAge >= 18 && hasLicense)
    console.log('can drive')
else
    console.log('cannot drive')

// 18.
let totalAmount = 1000;
let isMember = true;
let finalAmount;
if (isMember)
    finalAmount = totalAmount * 0.8;
else
    finalAmount = totalAmount * 0.95;
console.log(finalAmount)

// 19.
let numberLimit = 15;
for (let i = 1; i <= numberLimit; i++)
    if (i % 3 === 0)
        console.log(i)

// 20.
let hour =14;
if (hour >= 5 && hour < 12)
    console.log('Good morning')
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon')
else if (hour >= 18 && hour < 22)
    onsole.log('Good evening')
else
    console.log('Good night')
