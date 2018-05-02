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
       $("#art1a").toggleClass("active");
   });

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
       $("#art1a").toggleClass("active");
   });

   $("#art1a").on('swiperight', function(){
       $("#art1a").toggleClass("active");
       $("#art1c").toggleClass("active");
   });

   $("#art1b").on('swiperight', function(){
       $("#art1b").toggleClass("active");
       $("#art1a").toggleClass("active");
   });

   $("#art1c").on('swiperight', function(){
       $("#art1c").toggleClass("active");
       $("#art1b").toggleClass("active");
   });

    /*

     Second Block

     */

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
        $("#art4a").toggleClass("active");
    });


    // swiperight

    $("#art4a").on('swiperight', function(){
        $("#art4a").toggleClass("active");
        $("#art4e").toggleClass("active");
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
