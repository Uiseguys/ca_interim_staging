$(function(){
   $("#projectTitle1").click(function(){
       $(".artworks").toggleClass("active");
       $(".art1").toggleClass("active");
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
       $(".exhibitlist").toggleClass("hidden");
       $(".landing").toggleClass("hidden");
   });
});
