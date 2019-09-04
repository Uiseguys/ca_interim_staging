$(function(){
   $("#projectTitle1").click(function(){
       $("#artworks1").toggleClass("active");
       $("#art1a").toggleClass("active");
   });

    $("#projectTitle2").click(function(){
        $("#artworks2").toggleClass("active");
        $("#art2a").toggleClass("active");
    });

    $("#projectTitle3").click(function(){
        $("#artworks3").toggleClass("active");
        $("#art3a").toggleClass("active");
    });

    $("#projectTitle4").click(function(){
        $("#artworks4").toggleClass("active");
        $("#art4a").toggleClass("active");
    });

    $("#projectTitle01").click(function(){
        $("#artworks01").toggleClass("active");
        $("#art01a").toggleClass("active");
    });
    $("#projectTitle02").click(function(){
        $("#artworks02").toggleClass("active");
        $("#art02a").toggleClass("active");
    });
    $("#projectTitle03").click(function(){
        $("#artworks03").toggleClass("active");
        $("#art03a").toggleClass("active");
    });
    $("#projectTitle04").click(function(){
        $("#artworks04").toggleClass("active");
        $("#art04a").toggleClass("active");
    });
    $("#projectTitle05").click(function(){
        $("#artworks05").toggleClass("active");
        $("#art05a").toggleClass("active");
    });
    $("#projectTitle06").click(function(){
        $("#artworks06").toggleClass("active");
        $("#art06a").toggleClass("active");
    });
    $("#projectTitle07").click(function(){
        $("#artworks07").toggleClass("active");
        $("#art07a").toggleClass("active");
    });

    $("#projectTitle08").click(function(){
        $("#artworks08").toggleClass("active");
        $("#art08a").toggleClass("active");
    });

    $("#projectTitle09").click(function(){
        $("#artworks09").toggleClass("active");
        $("#art09a").toggleClass("active");
    });

    $("#projectTitle10").click(function(){
        $("#artworks10").toggleClass("active");
        $("#art10a").toggleClass("active");
    });

    $("#projectTitle11").click(function(){
        $("#artworks11").toggleClass("active");
        $("#art11a").toggleClass("active");
    });

    $("#projectTitle12").click(function(){
        $("#artworks12").toggleClass("active");
        $("#art12a").toggleClass("active");
    });

    $("#projectTitle13").click(function(){
        $("#artworks13").toggleClass("active");
        $("#art13a").toggleClass("active");
    });

    // $("#projectTitle5").click(function(){
    //     $("#artworks5").toggleClass("active");
    //     $("#art5a").toggleClass("active");
    // });
    //
    // $("#projectTitle6").click(function(){
    //     $("#artworks6").toggleClass("active");
    //     $("#art6a").toggleClass("active");
    // });
    //
    // $("#projectTitle7").click(function(){
    //     $("#artworks7").toggleClass("active");
    //     $("#art7a").toggleClass("active");
    // });
    //
    // $("#projectTitle8").click(function(){
    //     $("#artworks8").toggleClass("active");
    //     $("#art8a").toggleClass("active");
    // });
    //
    // $("#projectTitle9").click(function(){
    //     $("#artworks9").toggleClass("active");
    //     $("#art9a").toggleClass("active");
    // });

   $("#newwebsite").click(function(){
       $(".emailform").toggleClass("hidden");
   });

    /*

     First Block

     */

    $("#art1a").click(function(){
        $("#art1a").toggleClass("active");
        $("#art1b").toggleClass("active");
    });

    $("#art1b").click(function(){
        $("#art1b").toggleClass("active");
        $("#art1c").toggleClass("active");
    });

    $("#art1c").click(function(){
        $("#art1c").toggleClass("active");
        $("#art1d").toggleClass("active");
    });

    $("#art1d").click(function(){
        $("#art1d").toggleClass("active");
        $("#art1e").toggleClass("active");
    });

    $("#art1e").click(function(){
        $("#art1e").toggleClass("active");
        $("#art1a").toggleClass("active");
    });

    // swipeleft

    $("#art1a").on('swipeleft', function(){
        $("#art1a").toggleClass("active");
        $("#art1b").toggleClass("active");
    });

    $("#art1b").on('swipeleft', function(){
        $("#art1b").toggleClass("active");
        $("#art1c").toggleClass("active");
    });

    $("#art1c").on('swipeleft', function(){
        $("#art1c").toggleClass("active");
        $("#art1d").toggleClass("active");
    });

    $("#art1d").on('swipeleft', function(){
        $("#art1d").toggleClass("active");
        $("#art1e").toggleClass("active");
    });

    $("#art1e").on('swipeleft', function(){
        $("#art1e").toggleClass("active");
        $("#art1a").toggleClass("active");
    });

    // swiperight

    $("#art1a").on('swiperight', function(){
        $("#art1a").toggleClass("active");
        $("#art1e").toggleClass("active");
    });

    $("#art1b").on('swiperight', function(){
        $("#art1b").toggleClass("active");
        $("#art1a").toggleClass("active");
    });

    $("#art1c").on('swiperight', function(){
        $("#art1c").toggleClass("active");
        $("#art1b").toggleClass("active");
    });

    $("#art1d").on('swiperight', function(){
        $("#art1d").toggleClass("active");
        $("#art1c").toggleClass("active");
    });

    $("#art1e").on('swiperight', function(){
        $("#art1e").toggleClass("active");
        $("#art1d").toggleClass("active");
    });

    /*

     Second Block

     */

     $("#art2a").click(function(){
         $("#art2a").toggleClass("active");
         $("#art2b").toggleClass("active");
     });

     $("#art2b").click(function(){
         $("#art2b").toggleClass("active");
         $("#art2c").toggleClass("active");
     });

     $("#art2c").click(function(){
         $("#art2c").toggleClass("active");
         $("#art2d").toggleClass("active");
     });

     $("#art2d").click(function(){
         $("#art2d").toggleClass("active");
         $("#art2e").toggleClass("active");
     });

     $("#art2e").click(function(){
         $("#art2e").toggleClass("active");
         $("#art2a").toggleClass("active");
     });

     // swipeleft

     $("#art2a").on('swipeleft', function(){
         $("#art2a").toggleClass("active");
         $("#art2b").toggleClass("active");
     });

     $("#art2b").on('swipeleft', function(){
         $("#art2b").toggleClass("active");
         $("#art2c").toggleClass("active");
     });

     $("#art2c").on('swipeleft', function(){
         $("#art2c").toggleClass("active");
         $("#art2d").toggleClass("active");
     });

     $("#art2d").on('swipeleft', function(){
         $("#art2d").toggleClass("active");
         $("#art2e").toggleClass("active");
     });

     $("#art2e").on('swipeleft', function(){
         $("#art2e").toggleClass("active");
         $("#art2a").toggleClass("active");
     });

     // swiperight

     $("#art2a").on('swiperight', function(){
         $("#art2a").toggleClass("active");
         $("#art2e").toggleClass("active");
     });

     $("#art2b").on('swiperight', function(){
         $("#art2b").toggleClass("active");
         $("#art2a").toggleClass("active");
     });

     $("#art2c").on('swiperight', function(){
         $("#art2c").toggleClass("active");
         $("#art2b").toggleClass("active");
     });

     $("#art2d").on('swiperight', function(){
         $("#art2d").toggleClass("active");
         $("#art2c").toggleClass("active");
     });

     $("#art2e").on('swiperight', function(){
         $("#art2e").toggleClass("active");
         $("#art2d").toggleClass("active");
     });

    /* last Block */

    $("#art4a").click(function(){
        $("#art4a").toggleClass("active");
        $("#art4b").toggleClass("active");
    });

    $("#art4b").click(function(){
        $("#art4b").toggleClass("active");
        $("#art4c").toggleClass("active");
    });

    $("#art4c").click(function(){
        $("#art4c").toggleClass("active");
        $("#art4d").toggleClass("active");
    });

    $("#art4d").click(function(){
        $("#art4d").toggleClass("active");
        $("#art4e").toggleClass("active");
    });

    $("#art4e").click(function(){
        $("#art4e").toggleClass("active");
        $("#art4f").toggleClass("active");
    });

    $("#art4f").click(function(){
        $("#art4f").toggleClass("active");
        $("#art4g").toggleClass("active");
    });

    $("#art4g").click(function(){
        $("#art4g").toggleClass("active");
        $("#art4h").toggleClass("active");
    });

    $("#art4h").click(function(){
        $("#art4h").toggleClass("active");
        $("#art4i").toggleClass("active");
    });

    $("#art4i").click(function(){
        $("#art4i").toggleClass("active");
        $("#art4j").toggleClass("active");
    });

    $("#art4j").click(function(){
        $("#art4j").toggleClass("active");
        $("#art4a").toggleClass("active");
    });

    // swipeleft

    $("#art4a").on('swipeleft', function(){
        $("#art4a").toggleClass("active");
        $("#art4b").toggleClass("active");
    });

    $("#art4b").on('swipeleft', function(){
        $("#art4b").toggleClass("active");
        $("#art4c").toggleClass("active");
    });

    $("#art4c").on('swipeleft', function(){
        $("#art4c").toggleClass("active");
        $("#art4d").toggleClass("active");
    });

    $("#art4d").on('swipeleft', function(){
        $("#art4d").toggleClass("active");
        $("#art4e").toggleClass("active");
    });

    $("#art4e").on('swipeleft', function(){
        $("#art4e").toggleClass("active");
        $("#art4f").toggleClass("active");
    });

    $("#art4f").on('swipeleft', function(){
        $("#art4f").toggleClass("active");
        $("#art4g").toggleClass("active");
    });

    $("#art4g").on('swipeleft', function(){
        $("#art4g").toggleClass("active");
        $("#art4h").toggleClass("active");
    });

    $("#art4h").on('swipeleft', function(){
        $("#art4h").toggleClass("active");
        $("#art4i").toggleClass("active");
    });

    $("#art4i").on('swipeleft', function(){
        $("#art4i").toggleClass("active");
        $("#art4j").toggleClass("active");
    });

    $("#art4j").on('swipeleft', function(){
        $("#art4j").toggleClass("active");
        $("#art4a").toggleClass("active");
    });


    // swiperight

    $("#art4a").on('swiperight', function(){
        $("#art4a").toggleClass("active");
        $("#art4j").toggleClass("active");
    });

    $("#art4b").on('swiperight', function(){
        $("#art4b").toggleClass("active");
        $("#art4a").toggleClass("active");
    });

    $("#art4c").on('swiperight', function(){
        $("#art4c").toggleClass("active");
        $("#art4b").toggleClass("active");
    });

    $("#art4d").on('swiperight', function(){
        $("#art4d").toggleClass("active");
        $("#art4c").toggleClass("active");
    });

    $("#art4e").on('swiperight', function(){
        $("#art4e").toggleClass("active");
        $("#art4d").toggleClass("active");
    });

    $("#art4f").on('swiperight', function(){
        $("#art4f").toggleClass("active");
        $("#art4e").toggleClass("active");
    });

    $("#art4g").on('swiperight', function(){
        $("#art4g").toggleClass("active");
        $("#art4f").toggleClass("active");
    });

    $("#art4h").on('swiperight', function(){
        $("#art4h").toggleClass("active");
        $("#art4g").toggleClass("active");
    });

    $("#art4i").on('swiperight', function(){
        $("#art4i").toggleClass("active");
        $("#art4h").toggleClass("active");
    });

    $("#art4j").on('swiperight', function(){
        $("#art4j").toggleClass("active");
        $("#art4i").toggleClass("active");
    });


    // Latest Posts


  /*

     new First Block

     */

    $("#art01a").click(function(){
        $("#art01a").toggleClass("active");
        $("#art01b").toggleClass("active");
    });

    $("#art01b").click(function(){
        $("#art01b").toggleClass("active");
        $("#art01c").toggleClass("active");
    });

    $("#art01c").click(function(){
        $("#art01c").toggleClass("active");
        $("#art01a").toggleClass("active");
    });

   

    // swipeleft

    $("#art01a").on('swipeleft', function(){
        $("#art01a").toggleClass("active");
        $("#art01b").toggleClass("active");
    });

    $("#art01b").on('swipeleft', function(){
        $("#art01b").toggleClass("active");
        $("#art01c").toggleClass("active");
    });

    $("#art01c").on('swipeleft', function(){
        $("#art01c").toggleClass("active");
        $("#art01a").toggleClass("active");
    });


    // swiperight

    $("#art01a").on('swiperight', function(){
        $("#art01a").toggleClass("active");
        $("#art01c").toggleClass("active");
    });

    $("#art01b").on('swiperight', function(){
        $("#art01b").toggleClass("active");
        $("#art01a").toggleClass("active");
    });

    $("#art01c").on('swiperight', function(){
        $("#art01c").toggleClass("active");
        $("#art01b").toggleClass("active");
    });



  /*

     new Second Block

     */

    $("#art02a").click(function(){
        $("#art02a").toggleClass("active");
        $("#art02b").toggleClass("active");
    });

    $("#art02b").click(function(){
        $("#art02b").toggleClass("active");
        $("#art02c").toggleClass("active");
    });

    $("#art02c").click(function(){
        $("#art02c").toggleClass("active");
        $("#art02a").toggleClass("active");
    });

   

    // swipeleft

    $("#art02a").on('swipeleft', function(){
        $("#art02a").toggleClass("active");
        $("#art02b").toggleClass("active");
    });

    $("#art02b").on('swipeleft', function(){
        $("#art02b").toggleClass("active");
        $("#art02c").toggleClass("active");
    });

    $("#art02c").on('swipeleft', function(){
        $("#art02c").toggleClass("active");
        $("#art02a").toggleClass("active");
    });


    // swiperight

    $("#art02a").on('swiperight', function(){
        $("#art02a").toggleClass("active");
        $("#art02c").toggleClass("active");
    });

    $("#art02b").on('swiperight', function(){
        $("#art02b").toggleClass("active");
        $("#art02a").toggleClass("active");
    });

    $("#art02c").on('swiperight', function(){
        $("#art02c").toggleClass("active");
        $("#art02b").toggleClass("active");
    });


  /*

     new 3rd Block

     */

    $("#art03a").click(function(){
        $("#art03a").toggleClass("active");
        $("#art03b").toggleClass("active");
    });

    $("#art03b").click(function(){
        $("#art03b").toggleClass("active");
        $("#art03c").toggleClass("active");
    });

    $("#art03c").click(function(){
        $("#art03c").toggleClass("active");
        $("#art03a").toggleClass("active");
    });

   

    // swipeleft

    $("#art03a").on('swipeleft', function(){
        $("#art03a").toggleClass("active");
        $("#art03b").toggleClass("active");
    });

    $("#art03b").on('swipeleft', function(){
        $("#art03b").toggleClass("active");
        $("#art03c").toggleClass("active");
    });

    $("#art03c").on('swipeleft', function(){
        $("#art03c").toggleClass("active");
        $("#art03a").toggleClass("active");
    });


    // swiperight

    $("#art03a").on('swiperight', function(){
        $("#art03a").toggleClass("active");
        $("#art03c").toggleClass("active");
    });

    $("#art03b").on('swiperight', function(){
        $("#art03b").toggleClass("active");
        $("#art03a").toggleClass("active");
    });

    $("#art03c").on('swiperight', function(){
        $("#art03c").toggleClass("active");
        $("#art03b").toggleClass("active");
    });


  /*

     new 6th Block

     */

    $("#art06a").click(function(){
        $("#art06a").toggleClass("active");
        $("#art06b").toggleClass("active");
    });

    $("#art06b").click(function(){
        $("#art06b").toggleClass("active");
        $("#art06c").toggleClass("active");
    });

    $("#art06c").click(function(){
        $("#art06c").toggleClass("active");
        $("#art06d").toggleClass("active");
    });

    $("#art06d").click(function(){
        $("#art06d").toggleClass("active");
        $("#art06e").toggleClass("active");
    });

    $("#art06e").click(function(){
        $("#art06e").toggleClass("active");
        $("#art06a").toggleClass("active");
    });

   

    // swipeleft

    $("#art06a").on('swipeleft', function(){
        $("#art06a").toggleClass("active");
        $("#art06b").toggleClass("active");
    });

    $("#art06b").on('swipeleft', function(){
        $("#art06b").toggleClass("active");
        $("#art06c").toggleClass("active");
    });

    $("#art06c").on('swipeleft', function(){
        $("#art06c").toggleClass("active");
        $("#art06d").toggleClass("active");
    });

    $("#art06d").on('swipeleft', function(){
        $("#art06d").toggleClass("active");
        $("#art06e").toggleClass("active");
    });

    $("#art06e").on('swipeleft', function(){
        $("#art06e").toggleClass("active");
        $("#art06a").toggleClass("active");
    });


    // swiperight

    $("#art06a").on('swiperight', function(){
        $("#art06a").toggleClass("active");
        $("#art06c").toggleClass("active");
    });

    $("#art06b").on('swiperight', function(){
        $("#art06b").toggleClass("active");
        $("#art06a").toggleClass("active");
    });

    $("#art06c").on('swiperight', function(){
        $("#art06c").toggleClass("active");
        $("#art06b").toggleClass("active");
    });

    $("#art06d").on('swiperight', function(){
        $("#art06d").toggleClass("active");
        $("#art06e").toggleClass("active");
    });

    $("#art06e").on('swiperight', function(){
        $("#art06e").toggleClass("active");
        $("#art06a").toggleClass("active");
    });


    /*

     new 7th Block

     */

    $("#art07a").click(function(){
        $("#art07a").toggleClass("active");
        $("#art07b").toggleClass("active");
    });

    $("#art07b").click(function(){
        $("#art07b").toggleClass("active");
        $("#art07c").toggleClass("active");
    });

    $("#art07c").click(function(){
        $("#art07c").toggleClass("active");
        $("#art07d").toggleClass("active");
    });

    $("#art07d").click(function(){
        $("#art07d").toggleClass("active");
        $("#art07e").toggleClass("active");
    });

    $("#art07e").click(function(){
        $("#art07e").toggleClass("active");
        $("#art07a").toggleClass("active");
    });



    // swipeleft

    $("#art07a").on('swipeleft', function(){
        $("#art07a").toggleClass("active");
        $("#art07b").toggleClass("active");
    });

    $("#art07b").on('swipeleft', function(){
        $("#art07b").toggleClass("active");
        $("#art07c").toggleClass("active");
    });

    $("#art07c").on('swipeleft', function(){
        $("#art07c").toggleClass("active");
        $("#art07d").toggleClass("active");
    });

    $("#art07d").on('swipeleft', function(){
        $("#art07d").toggleClass("active");
        $("#art07e").toggleClass("active");
    });

    $("#art07e").on('swipeleft', function(){
        $("#art07e").toggleClass("active");
        $("#art07a").toggleClass("active");
    });


    // swiperight

    $("#art07a").on('swiperight', function(){
        $("#art07a").toggleClass("active");
        $("#art07c").toggleClass("active");
    });

    $("#art07b").on('swiperight', function(){
        $("#art07b").toggleClass("active");
        $("#art07a").toggleClass("active");
    });

    $("#art07c").on('swiperight', function(){
        $("#art07c").toggleClass("active");
        $("#art07b").toggleClass("active");
    });

    $("#art07d").on('swiperight', function(){
        $("#art06d").toggleClass("active");
        $("#art06b").toggleClass("active");
    });

    $("#art07e").on('swiperight', function(){
        $("#art07e").toggleClass("active");
        $("#art07d").toggleClass("active");
    });


    /*

     new 8th Block

     */

    $("#art08a").click(function(){
        $("#art08a").toggleClass("active");
        $("#art08b").toggleClass("active");
    });

    $("#art08b").click(function(){
        $("#art08b").toggleClass("active");
        $("#art08a").toggleClass("active");
    });


    // swipeleft

    $("#art08a").on('swipeleft', function(){
        $("#art08a").toggleClass("active");
        $("#art08b").toggleClass("active");
    });

    $("#art08b").on('swipeleft', function(){
        $("#art08b").toggleClass("active");
        $("#art08a").toggleClass("active");
    });


    // swiperight

    $("#art08a").on('swiperight', function(){
        $("#art08a").toggleClass("active");
        $("#art08b").toggleClass("active");
    });

    $("#art08b").on('swiperight', function(){
        $("#art08b").toggleClass("active");
        $("#art08a").toggleClass("active");
    });


    /*

     new 13th Block

     */

    $("#art13a").click(function(){
        $("#art13a").toggleClass("active");
        $("#art13b").toggleClass("active");
    });

    $("#art13b").click(function(){
        $("#art13b").toggleClass("active");
        $("#art13c").toggleClass("active");
    });

    $("#art13c").click(function(){
        $("#art13c").toggleClass("active");
        $("#art13a").toggleClass("active");
    });


    // swipeleft

    $("#art13a").on('swipeleft', function(){
        $("#art13a").toggleClass("active");
        $("#art13b").toggleClass("active");
    });

    $("#art13b").on('swipeleft', function(){
        $("#art13b").toggleClass("active");
        $("#art13c").toggleClass("active");
    });

    $("#art13c").on('swipeleft', function(){
        $("#art13c").toggleClass("active");
        $("#art13a").toggleClass("active");
    });


    // swiperight

    $("#art13a").on('swiperight', function(){
        $("#art13a").toggleClass("active");
        $("#art13c").toggleClass("active");
    });

    $("#art13b").on('swiperight', function(){
        $("#art13b").toggleClass("active");
        $("#art13a").toggleClass("active");
    });

    $("#art13c").on('swiperight', function(){
        $("#art13c").toggleClass("active");
        $("#art13b").toggleClass("active");
    });



    $(".landing").click(function(){
       $("body").toggleClass("introBackground");
       $(".titleHeader").toggleClass("intro");
       $(".nameHeader").toggleClass("intro");
       $(".content-container").toggleClass("hidden");
       $(".landing").toggleClass("hidden");
       $(".row4").toggleClass("hidden");
       $(".ellipsis").toggleClass("hidden");

       if($(window).width() > 1023) {
           stickyHeaders.load($(".sectionHeader"));
       }

   });

    $(".arrow").click(function(ev) {
        $('html, body').animate({scrollTop: '0px'}, 300);
    });
});
