var tl=gsap.timeline()

tl.from("#nav h3",{
    y:-50,
    opacity:0,
    duration:0.8,
    stagger:0.5
})
tl.from("#text h1",{
    x:-1380,
    opacity:0,
    duration:0.8,
    stagger:1
})
tl.from("img",{
    x:150,
    duration:0.8,
    rotate:45,
    opacity:0,
    stagger:1
})