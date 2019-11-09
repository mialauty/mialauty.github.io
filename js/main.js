// // Init ScrollMagic
// var ctrl = new ScrollMagic.Controller({
//     globalSceneOptions: {
//         triggerHook: 'onLeave'
//     }
// });

// // Create scene
// $("section").each(function() {
 
//     new ScrollMagic.Scene({
//         triggerElement: this
//     })
//     .setPin(this)
//     .addTo(ctrl);
 
// });

// Change the video proportions depending on viewing window.
if (($("header").width() / $("header").height()) > (16 / 9)) {
    $("#header-vid").addClass("landscape");
} else {
    $("#header-vid").addClass("portrait");
}

var controller = new ScrollMagic.Controller();

// Animate Happy Anniversary
new ScrollMagic.Scene({
    triggerElement: "#our-start",
    triggerHook: 0.5,
    offset: 0,
})
    .setClassToggle("#greeting", "magic-opaque")
    // .addIndicators()
    .addTo(controller);

// Change background color
// var toYellow = TweenMax.fromTo(
//     "#greeting-bg",
//     0.5,
//     {backgroundColor: "black"},
//     {backgroundColor: "#FFF476"}
// );

// new ScrollMagic.Scene({
//     triggerElement: "#our-start",
//     triggerHook: 0.5,
// })
//     .setTween(toYellow)
//     // .addIndicators()
//     .addTo(controller);

// Reveal before photo
new ScrollMagic.Scene({
    triggerElement: "#before-us",
    triggerHook: 0.7,
    // duration: "50%",
})
    .setClassToggle("#before-us", "magic-opaque")
    // .addIndicators()
    .addTo(controller);

// Reveal Kisses Video
new ScrollMagic.Scene({
    triggerElement: "#trigger-kisses",
    offset: -50,
})
    .setClassToggle("#kisses", "magic-opaque")
    // .addIndicators()
    .addTo(controller);

// both parallax
$(".parallax-parent").each(function() {
    new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: "onEnter",
        duration: "200%",
    })
        .setTween("#" + this.id + "> div", {
            y: "40%",
            ease: Linear.easeNone
        })
        // .addIndicators()
        .addTo(controller);
});


// new ScrollMagic.Scene({
//     triggerElement: "#parallax-both",
//     triggerHook: "onEnter",
//     duration: "200%",
// })
//     .setTween("#parallax-both > div", {y: "80%", ease: Linear.easeNone})
//     // .addIndicators()
//     .addTo(controller);

// new ScrollMagic.Scene({
//     triggerElement: "#parallax-but-why",
//     triggerHook: "onEnter",
//     duration: "200%",
// })
//     .setTween("#parallax-but-why > div", {y: "80%", ease: Linear.easeNone})
//     // .addIndicators()
//     .addTo(controller);



// pin transition and hook

$("#scouting, #lure").each(function() {
    new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: "onLeave",
        duration: "50%",
    })
        .setPin(this)
        // .addIndicators()
        .addTo(controller);
});


// new ScrollMagic.Scene({
//     triggerElement: "#wymm-2nd-row",
// })
//     .setPin("#wymm-2nd-row")
//     // .addIndicators()
//     .addTo(controller);

//reload gifs
// $(".wymm-gif").each(function() {
//     var previousSource = this.src;

//     new ScrollMagic.Scene({
//         triggerElement: "#wymm",
//         triggerHook: "onEnter",
//     })
//         .on("enter", function(e) {
//             this.src = ""
//             this.src = previousSource;
//         })
//         // .addIndicators()
//         .addTo(controller);
// });
