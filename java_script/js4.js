// a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback)
function abcd(fn){
    setTimeout(fn,2000);
}

abcd(function(){
    console.log("hi siddhi!!!!");
});

//Implement your own version of `.map()` as a higher-order function.
var arr=[1,2,3,4,5];
var ans=arr.map()