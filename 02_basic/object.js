
let val={

    name:"manoj",
    date:"17",
    day:"friday",
    id:"423",
    location:"indore",
    joblocation:"gurugram"
};

// console.log(` this is my date ${val.date}`);
// console.log(val.name);
// console.log(val["id"]);
val.greeting=function(){
    console.log("hello kese ho");
}

val.another=function(){
    console.log(`hello kese ho ${val.joblocation}`);
}

console.log(val.greeting());
console.log(val.another());
