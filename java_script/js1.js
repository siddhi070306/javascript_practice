var a=12;
var b=10;
var c
c=a
a=b
b=c
console.log("a,b",a,b);
console.groupCollapsed("aaj ka khana");
console.log("dall chaawal");
console.log("apple");
console.log("nibu pani");
console.log("panipuri");
console.groupEnd();


const obj={        
    name:"siddhi",
    age:21,
    email:"rest@gmail.com",
}

Object.freeze(obj);
obj.name="riddhi"

let str="javascript"
console.log(str.indexOf("scripta"))             //agar ans -1 ata hai to wo false hai ytani wi word false hai
console.log(str.search("scripta"))             //agar ans -1 ata hai to wo false hai ytani wi word false hai

var arr=[1,2,3,4]

var ans=arr.map(function(value){                //map return value ko blank array me leke jata hai aur usko print karta hai new array me map me return value hoti hai 
    return 1;
})

