function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


var tl = gsap.timeline()  // creating timeline

function page1_content_animation(){
    tl.from("#page1-content h1",{
        y:100,
        opacity:0,
        delay:0.3,
        stagger:0.2,
    })
}
page1_content_animation()  // calling function



function box1_Animation(){
let box1 = document.querySelector(".box-1")
let h3 = document.querySelector(".box-1 h3 ")
let h4 = document.querySelector(".box-1 h4")
let h3_i = document.querySelector(".box-1 h3 i")

//  mouse enter par text gayab hoga and image dikhai degg
box1.addEventListener("mouseenter",function(){
    h3.style.opacity = 0;
    h4.style.opacity = 0;
    h3_i.style.opacity = 0;
})
// mouse leave hone par image gayab hojayegi and text dikhai dega
box1.addEventListener("mouseleave",function(){
  h3.style.opacity = 1;
  h4.style.opacity = 1;
  h3_i.style.opacity = 1;
})
}
// box1_Animation();