
// datatype in javascrip

// 1-> premitive 
//  string,number,null undefined,symbol,boolean,bigint

// let val="manoj";
// console.log(typeof(val));
// let check=43;
// console.log(typeof(check));
// let Nll=null;
// console.log(typeof(Nll));

// let firstval=Symbol(32);
// let secondval=Symbol(32);
// console.log(firstval==secondval);
// console.log(firstval);
// console.log(secondval);






// 2-> reference (non-primitive)
// array,function,object;

// let arr=["manoj","kumar","dheeraj","ajay","niranjan singh"];  array

//  {
              //      object
// };

// let fun= function(){
//     console.log("hello kese ho "); function
// }

//+++++++++++++++++++++++++++++++++++++++++++

//type of memory allocation in JSON
//1 -> stack (primitive)

let firstval="manojkumar";
let secondval=firstval;
secondval="rashkumar";
console.log(secondval);

// 2->heap (reference or non-primitive);

let obj={
    mail:"manoj@gmail.com",
    id:"32343",
};

let obj2=obj;
obj2.mail="rahe@gmail.com";
console.log(obj2.mail);