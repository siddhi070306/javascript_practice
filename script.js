
var button=document.querySelectorAll('button')
var box=document.querySelector('#box')

function gibli(){
        console.log('running function');
        box.innerHTML='changed'
        box.style.backgroundColor='pink'
}
button.forEach(btn=>btn.addEventListener('click',gibli))

