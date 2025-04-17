var arr = [3, 1, 4,3,1,4,2,5]
var ans=[...new Set(arr)];
var newarr=ans.sort(function(a,b){
    return b-a;
});
console.log(newarr[1]);

//reverse an array without using reverse funt
var arr2=[1,2,3,4,5];
var arr3=[]
for(var i=arr.length-1;i>=0;i--){
    arr3.push(arr2[i]);
}

//kon kitni bar aya hai and kon jyada bar aya hai
var arr4=[4,3,2,4,3,2,2,1]
var obj={
    "4":1,
    "3":1,
    "2":1,
    "1":1
}
arr4.forEach(function(val) {
obj[val]===undefined?(obj[val]=1):obj[val]++;
});
console.log(obj)