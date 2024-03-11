var tl=gsap.timeline();

tl.from("h1",{
    x:-1000,
    stagger:1,
    duration:2,
   opacity:0
})

gsap.from(".nav img",{
    y:-100,
    delay:1,
    duration:1
})
gsap.from(".nav .prt2 a",{
    y:-100,
    delay:1,
    duration:1
})
gsap.from(".nav .part3 a",{
    y:-100,
    delay:1,
    duration:2
})

gsap.from("#img1",{
    y:-100,
    delay:1,
    duration:2
})
gsap.from("#img2",{
    x:-500,
    delay:1,
    duration:2
})
gsap.from("#img3",{
    y:-500,
    delay:1,
    duration:2
})
