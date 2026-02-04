//type conversion
let zipcode = String(585103); 
console.log(zipcode, typeof zipcode); //num to string
let dob = Number("10102000");
console.log(dob, typeof dob); // string to num

  // coersion
const plotno = 101865;
let plotname =" 'madhu kunj'585103"; 
let address = plotno + plotname; //num + string o/p is string
console.log(address, typeof address);

// let newaddress = 5 - address;
// console.log(newaddress, typeof newaddress); //num - string = number. subtraction operator with string gives number its type coersion
 let a = 2
 let b = 3
 let c = 4
 let ans = 3*3
 console.log(ans);
 let result = 3**3 // 3 to the power 3
 console.log(result);
 let logicresult = b > a || c<b
 let bitwiseresult = b > a | c<b
 console.log(logicresult);  // output true or false
 console.log(bitwiseresult); //output 1 or 0