let num= 63;
if (num % 2 === 0)
    console.log("number is even");
else 
    console.log("number is odd");

let num1= 30;
let num2 = 20;
let num3 = 4;
if (num1>num2 && num1>num3) // if statement check true or false no need to write (result === true)
    console.log("first number greater");
else if(num2 >num3)
    console.log("second number is greater");
else
    console.log("third number is greater");

//ternary operator
let digit= 6;
let result;
result = digit % 2 === 0? "even" : "odd" ;   //condition ? valueIfTrue : valueIfFalse
console.log(result);

let age =18;
let votingRight ;
votingRight = age >= 18 ? "canVote" : "can'tVote";
console.log(votingRight);
