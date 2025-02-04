var t1=gsap.timeline();
t1.from(".line h1",{
    y:150,
    stagger:0.5,
    duration:0.5,
    delay:0.5,

});
t1.from("#linePart1,.line h2",{
    opacity:0,
onStart:function(){
var h5 = document.querySelector("#linePart1 h5 ")
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
    y:1600,
    opacity:0,
    duration:0.5,
    ease:Power4,
})
t1.to("loader",{
    diplay:"none"
})




 
