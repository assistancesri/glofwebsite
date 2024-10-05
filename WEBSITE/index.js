var crsr=document.querySelector("#cursor");
var blu=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x + "px"
    crsr.style.top= dets.y + "px"
    blu.style.left= dets.x - 150 + "px"
    blu.style.top= dets.y - 150 + "px"
})
gsap.to("#nav",{
    backgroundColor :"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end: "top -75%",
        scrub:2,
    }
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale= 3
        crsr.style.border="1px solid #fff"
        crcr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale= 1
        crsr.style.border="0px solid #95C11E"
        crcr.style.backgroundColor="transparent"
    })
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3,

    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3,

    }
})



gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3,

    }
})

gsap.from("#colon2",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3,

    }
})
