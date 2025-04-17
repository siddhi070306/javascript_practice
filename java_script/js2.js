// print 10 to 1 usinf for loop
for(var i=10;i>=1;i--){
    console.log(i)
}

// print table of 3 using while loop
var a=0
while(a<=10)
{
    a++
    console.log(3*a)
}

//calculate sum of no. 1 to 100
var sum=0
for(var b=1;b<=100;b++){
    sum+=b;
}
console.log(sum)

//star pattern
for(var c=1;c<=5;c++){
    let star="";
    for(var d=1;d<=c;d++)
    {
        star+="*";
    }
    console.log("*")
}

//print each ketter on new line
var str="javascript";
for(var e of str){
    console.log(e)
}

//remove repeted no.s from array eg [1,1,1,1,2,3,4,4,4,5,]----->[1,2,3,4,5]
var arr=[1,1,1,1,2,3,4,4,4,4,5,4,5,5]
var ans = [...new Set(arr)]
