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
