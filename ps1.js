//create a variable of type string and add a number to it
let a="Aashika";
let b=8;
let sum= a + b;
console.log(sum+"\n");

//use typeof operator to find the datatype of string 

console.log(typeof sum +"\n");

//create an object using const. Can u change it to hold a number later

const k={
    "house": "bamboo",
    "color":"black",
    "country":"nepal",
    "strength": true
};

// const k; is not possible

//try to add new key to that object ... is it possible

k["height"]=6; 
/*this is possible k is const so it cant be used to hold other 
variables or redefined but kkeys can be added values an be changed within it*/
k["house"]= "cement";
console.log(k);

//wap to crate a word meaning dictionary of 3 words

const dict={
    "abandon": "leave",
    "antagonist":"villian",
    "protagonist": "hero",
}

console.log(dict);

console.log("\n"+dict['abandon']);  //or dict.abandon

