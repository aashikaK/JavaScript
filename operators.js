// assignment operators
let a=8;
console.log('a+a= ', a+=a);
console.log('a-a= ', a-=a);

a=8;
console.log('a*8= ', a*=8);
console.log('a/2= ', a/=2);

// comparison opearators  >, <. <=, => and .... 
 let comp1=6;
 let comp2=7;
 console.log("comp1 == comp2 is ", comp1==comp2);
 console.log("comp1===comp2 is ", comp1===comp2); //checks both datatype and equality
 console.log("comp1 != comp2 is ", comp1!= comp2);
 comp1="a";
 comp2=a;
 console.log("comp1 !== comp2 is ", comp1!== comp2);

//  logical operators  = operates on boolean

let x=9;
let y=4;
console.log(x>y && x<10); //true
console.log(x>y || y==0); //true
console.log(!false); //true
console.log(!true) ; //false
