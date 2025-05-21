Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {videos: ["./0.mp4", "./2.mp4", "./3.mp4"],});


gsap.to("", {
    scrolltrigger:{
        trigger: ".fimages",
        start: "top top",
        end: "bottom bottom",
       endtrigger: ".last",
       scrub: 1,


    },
    y:"-300%",
    ease: Power1
})