gsap.from("#box1 h1",{
    transform:"translateX(-115%)", 
    scrollTrigger :{
        trigger:"#box1",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:5,
        pin:true,
    } 
})
