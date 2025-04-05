var button=document.querySelector('button')
var h5=document.querySelector('h5')
var check=0
button.addEventListener('click',function(){
if(check==0){
    h5.innerHTML='friends'
h5.style.color='green'
button.innerHTML='remove friend'
console.log('dost ban gye')
check=1
}
else{
    h5.innerHTML='strangers'
h5.style.color='red'
button.innerHTML='add friend'
console.log('dost dost na raha')

check=0
}
})