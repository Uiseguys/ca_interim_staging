$(function(){
   $("#projectTitle1").click(function(){
       $(".artworks").toggleClass("active");
       $(".art1").toggleClass("active");
       $("#actualtitle1").toggleClass("underline");
   });

   $("#projectTitle2").click(function(){
       $("#actualtitle2").toggleClass("underline");
   });

   $("#projectTitle3").click(function(){
       $("#actualtitle3").toggleClass("underline");
   });

   $("#projectTitle4").click(function(){
       $("#actualtitle4").toggleClass("underline");
   });

   $("#newwebsite").click(function(){
       $(".emailform").toggleClass("hidden");
       $(".websiteword").toggleClass("underline");
   });

   $(".art1").click(function(){
       $(".art1").toggleClass("active");
       $(".art2").toggleClass("active");
   });

   $(".art2").click(function(){
       $(".art2").toggleClass("active");
       $(".art3").toggleClass("active");
   });

   $(".art3").click(function(){
       $(".art3").toggleClass("active");
       $(".art1").toggleClass("active");
   });

   $(".art1").on('swipeleft', function(){
       $(".art1").toggleClass("active");
       $(".art2").toggleClass("active");
   });

   $(".art2").on('swipeleft', function(){
       $(".art2").toggleClass("active");
       $(".art3").toggleClass("active");
   });

   $(".art3").on('swipeleft', function(){
       $(".art3").toggleClass("active");
       $(".art1").toggleClass("active");
   });

   $(".art1").on('swiperight', function(){
       $(".art1").toggleClass("active");
       $(".art3").toggleClass("active");
   });

   $(".art2").on('swiperight', function(){
       $(".art2").toggleClass("active");
       $(".art1").toggleClass("active");
   });

   $(".art3").on('swiperight', function(){
       $(".art3").toggleClass("active");
       $(".art2").toggleClass("active");
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

    $(".nameHeader.intro").click(function(ev){

        if($(ev.target).hasClass('intro')){
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

        }

    });

    $(".arrow").click(function(ev) {
        $('html, body').animate({scrollTop: '0px'}, 300);
    });
});
