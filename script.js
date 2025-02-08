// function loadingAnimation() {
//     var t1 = gsap.timeline();
//     t1.from(".line h1", {
//         y: 150,
//         stagger: 0.5,
//         duration: 0.5,
//         delay: 0.5,
//     })
//     .from("#linePart1, .line h2", {
//         opacity: 0,
//         onStart: function () {
//             var h5 = document.querySelector("#linePart1 h5");
//             var updated = 0;
//             setInterval(function () {
//                 if (updated < 100) {
//                     updated++;
//                     h5.innerHTML = updated;
//                 }
//             }, 20);
//         },
//     })
//     .to("#loader", {
//         opacity: 0,
//         duration: 0.2,
//         delay: 4,
//         onComplete: function () {
//             gsap.set("#loader", { display: "none" }); // Properly hide loader
//         }
//     }) 
//     .from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
//         y:120,
//         stagger:0.2
//     })
//     .from("#nav",{
//          opacity:0
//         })
//     .from("#page1", {
//         delay: 0.2,
//         y: "100vh", // Adjusted to viewport height
//         opacity: 0,
//         duration: 0.8,
//         ease: "power4.out",
//         onComplete: function () {
//             window.scrollTo(0, 0); // Ensure page starts at top
//         }
//     });
// }
// function crsrfunction() {
//     document.addEventListener("mousemove", function (dets) {
//         gsap.to("#crsr", {
//             left: dets.x,
//             top: dets.y,
//             duration: 0.2,
//             ease: "power2.out"
//         });
//     });

//     Shery.makeMagnet("#nav-part1 h4");
// }

// window.onload = function () {
//     loadingAnimation();
//     crsrfunction();
// };


function loadingAnimation(){
    var t1=gsap.timeline();
t1.from(".line h1",{
    y:150,
    stagger:0.5,
    duration:0.5,
    delay:0.5,
    opacity:0,

});
t1.from("#linePart1,.line h2",{
    opacity:0,
onStart:function(){
var h5 = document.querySelector("#linePart1 h5")
    var updated =0
    setInterval(function(){
        if(updated<100){
        updated++;
        h5.innerHTML=updated
        }
        else{
            h5.innerHTML=updated
        }

    },20);
},
});
t1.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4
});
t1.from("#page1",{
    delay:0.2,
    y:100,
    opacity:0,
    duration:0.5,
    ease:Power4.easeOut,
})
t1.to("#loader",{
    display:"none"
})
t1.from("#nav",{
 opacity:0
})
t1.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
   y:120,
   stagger:0.2
})
}
loadingAnimation()

function crsrfunction(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
              duration: 0.2, // Smooth transition
            ease: "power2.out"
        });
    });
    

    Shery.makeMagnet("#nav-part1 h4");
}
crsrfunction();


 
