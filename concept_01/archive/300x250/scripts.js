(function() {

    //this gives simple names from your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),



        setValues = { x: 0, y: 0, autoAlpha: 0 },

        rolloverActive = false, //disables cta rollover animation until cta is visible

        t = TweenMax; //shortens the tweenmax name from "t"


    function bannerInit() {
        //set unique positions and other values you plan from animate here

        t.set([], setValues);
       
        t.set([img01,img02,img03], {x:300})
        // t.set(blinds, {scaleX:.3})
         t.set(blinds, {autoAlpha:0});

        // t.set([copy03, copy04,copy05,copy06], {autoAlpha:0});


        t.set(rectMask, {transformOrigin:"150px 138px"}) //sets all graphic elements opacity on stage from 0



        //init animation
        Frame01();

    }

    // animation sequence begin
    function Frame01() {



        //Frame 01

      

        t.to(introCard, .7, { x: -300, ease: Power3.easeOut, delay: 2 });
      
        t.delayedCall(2, Frame02);

    };

    function Frame02() {
        t.set([greenBar, copy01, copy02], {autoAlpha:1});

        

        t.to(img01, .7, { x: 0, ease: Power3.easeOut, delay: 0 });
        t.from(rectMask, .7, { scaleY:0,  ease: Power3.easeInOut, delay: .5});
        t.to(rectMask, .7, {  scaleY:0,  ease: Power3.easeInOut, delay: 4});
        t.to(img01, .7, { x: -300, ease: Power3.easeInOut, delay: 4.5 });
        t.to(copy02, 0, { autoAlpha: 0,  delay: 4.5 });
     

        t.delayedCall(4.5, Frame03);
    };

    function Frame03() {
        t.set(rectMask, {y:0, scale:1})

        t.to(copy03, 0, { autoAlpha: 1});

        t.to(img02, .7, { x: 0, ease: Power3.easeInOut });
        t.from(rectMask, .7, { scaleY:0,  ease: Power3.easeInOut, delay: .5});
        t.to(rectMask, .7, { scaleY:0,  ease: Power3.easeInOut, delay: 4});
        t.to(img02, .7, { x: -300, ease: Power3.easeInOut, delay: 4.5 });
        t.to([copy01,copy03], 0, { autoAlpha: 0,  delay: 4.5 });


        t.delayedCall(4.5, Frame04);
    };

    function Frame04() {
        t.set(rectMask, {y:0, scale:1})


        t.to([copy05,copy06], 0, { autoAlpha: 1});

        t.to(img03, .7, { x: 0, ease: Power3.easeInOut, delay: 0 });
        t.from(rectMask, .7, { scaleY:0,  ease: Power3.easeInOut, delay:.5});
        t.to(rectMask, .7, { scaleY:0,  ease: Power3.easeInOut, delay: 4});
       



      
        t.delayedCall(4.5, Frame05);
    };

    function Frame05() {
        t.set(blinds, {autoAlpha:1});

        var tl = new TimelineLite();

      tl.staggerFrom("#blinds img", .03, {scaleX:0,  ease: Power3.easeInOut}, -.1);




  
        // t.delayedCall(3.5, Frame06);




    }

    // function Frame06() {


    //     t.to([copy11, copy12, copy13], .5, { autoAlpha: 0, ease: Power3.easeInOut, delay: 1 });
    //     t.from(bk5, .7, { autoAlpha: 0, y: 0, ease: Power3.easeOut, delay: 1.2 });
    //     t.from(copy14, .7, { autoAlpha: 0, y: "+=20", ease: Power3.easeOut, delay: 1.5 });
    //     t.from(copy15, .7, { autoAlpha: 0, y: "+=20", ease: Power3.easeOut, delay: 1.7 });
    //     t.from(copy16, .7, { autoAlpha: 0, y: "+=20", ease: Power3.easeOut, delay: 1.9 });
    //     t.from(copy17, .7, { autoAlpha: 0, y: "+=20", ease: Power3.easeOut, delay: 2 });
      

    //     t.from(legal, .7, { autoAlpha: 0, y: 0, ease: Power3.easeOut, delay: 2.4 });

    //     t.from(cta, .7, { y: "+=20", autoAlpha: 0, ease: Power3.easeOut, delay: 2.2, onComplete: function() { rolloverActive = true } });








    // }







    //rollover functions
    // document.getElementById('hit').onmouseover =
    //     function(event) {
    //         {
    //             if (rolloverActive) {
    //                 t.set(cta_whiteSlide, { x: 0 });
    //                 t.to(cta_whiteSlide, .5, { x: "+=200", ease: Power3.easeOut });
    //                 t.to(ctaCopy_green, .2, { autoAlpha: 0, ease: Power3.easeOut });
    //             }
    //         }
    //     };

    // document.getElementById('hit').onmouseout =
    //     function(event) {
    //         {
    //             if (rolloverActive) {
    //                 t.to(cta_whiteSlide, .5, { x: 0, ease: Power3.easeOut });
    //                 t.to(ctaCopy_green, .2, { autoAlpha: 1, ease: Power3.easeOut });
    //             }
    //         }
    //     };





    bannerInit();





})();