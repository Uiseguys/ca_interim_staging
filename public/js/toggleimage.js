$(function(){
   $("#projectTitle1").click(function(){
       $(".artworks").toggleClass("active");
   });

   $(".intro").click(function(){
       $(".exhibitlist").toggleClass("active");
       $(".intro").toggleClass("active");
   });
});
