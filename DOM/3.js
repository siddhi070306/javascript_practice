var arr=[{ 
    team:'CSK',
    primary:'yellow',
    secondary:'blue'
},
{
    team:'RCB👑',
    primary:'red',
    secondary:'black'
},
{
    team:'KKR',
    primary:'purple',
    secondary:'yellow'
},
{
    team:'SRH',
    primary:'orange',
    secondary:'black'
},
{
    team:'RR',
    primary:'#9c0b97',
    secondary:'blue'
},
{
    team:'MI',
    primary:'blue',
    secondary:'yellow'
}]
var button=document.querySelector('button')
var h1=document.querySelector('h1')

button.addEventListener('click',function(){
    var num=Math.floor(Math.random()*arr.length)

  var winner=arr[num]

  h1.innerHTML=winner.team
  h1.style.backgroundColor=winner.primary
  h1.style.color=winner.secondary 
})



