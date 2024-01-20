var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
   crsr.style.left=dets.x+"px";
   crsr.style.top=dets.y+"px";
   blur.style.left=dets.x-150+"px";
   blur.style.top=dets.y-150+"px";
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -4%",
        end:"top -5%",
        scrub:1
    }


})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -50%",
        end:"top -70%",
        scrub:"2"

    }
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2;
        crsr.style.border="1px solid white";
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #95C11E";
        crsr.style.backgroundColor="#95C11E"
    })
})
gsap.from("#about-us img,#about-us-in",{
    y:60,
    opacity:1,
    duration:2,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // marker:true,
        start:"top 60%",
        end:"top 65%",
        scrub:3

    }

})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // marker:true,
        start:"top 72%",
        end:"top 73%",
        scrub:1

    }

})

gsap.from("#colon1",{
    y:-70,
    x:-70,
  
    // stagger:0.1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // marker:true,
        start:"top 390px",
        end:"top 391px",
        scrub:1

    }

})
gsap.from("#colon2",{
    y:70,
    x:70,
    // duration:1,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        marker:true,
        start:"top 723px",
        end:"top 724px",
        scrub:1

    }

})
gsap.from("#page4 h1",{
    y:40,
    duration:3,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        marker:true,
        start:"top 700px",
        end:"top 706px",
        scrub:2

    }

})
