$(function(){

    $('.project').each(function(i, el){

        var title = $(el).find('.project-title')[0];
        var artworks = $(el).find('.artworks')[0];
        var images = $(artworks).find('.art');

        $(title).click(function(){
            $(artworks).toggleClass("active");
            if(images.length > 0) {
                $(images[0]).toggleClass("active");
            }

        });

        $(images).each(function(i, image){
            $(image).click(function(){
                $(image).toggleClass("active");
                if(images[i+1]) {
                    $(images[i+1]).toggleClass("active");
                } else {
                    $(images[0]).toggleClass("active");
                }

            });

            $(image).on('swipeleft', function(){
                $(image).toggleClass("active");
                if(images[i+1]) {
                    images[i+1].toggleClass("active");
                } else {
                    images[0].toggleClass("active");
                }

            });
        });

    });

   $("#newwebsite").click(function(){
       $(".emailform").toggleClass("hidden");
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
